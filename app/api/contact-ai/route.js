import { getGeminiModel } from "@/lib/gemini";

export const dynamic = "force-dynamic";

export async function POST(request) {
    let name = "";
    let subject = "";
    let message = "";

    try {
        const apiKey = process.env.GENERATIVE_API_KEY || process.env.GEMINI_API_KEY;

        if (!apiKey) {
            return Response.json({ error: "Missing AI API key." }, { status: 500 });
        }

        const body = await request.json();
        name = String(body.name || "").trim();
        subject = String(body.subject || "").trim();
        message = String(body.message || "").trim();

        if (!message) {
            return Response.json({ error: "Please write a message first." }, { status: 400 });
        }

        const prompt = `
Rewrite this portfolio contact form message so it sounds clear, polite, and professional.
Keep the sender's intent. Do not add fake details. Return only the improved message text.

Sender name: ${name || "Not provided"}
Subject: ${subject || "Not provided"}
Message:
${message}
`;

        const model = getGeminiModel(apiKey);
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const improvedMessage = response.text().trim();

        return Response.json({
            message: improvedMessage || message
        });
    } catch (error) {
        console.error("Contact AI error:", error);

        if (message) {
            return Response.json({
                fallback: true,
                message: createFallbackMessage({ name, subject, message })
            });
        }

        return Response.json({ error: "Could not improve the message right now." }, { status: 500 });
    }
}

function createFallbackMessage({ name, subject, message }) {
    const greeting = "Hello Mohammad Kaif,";
    const intro = name ? `My name is ${name}.` : "I am reaching out through your portfolio.";
    const projectLine = subject ? `I would like to discuss ${subject}.` : "I would like to discuss a project or service requirement.";
    const cleanMessage = message.replace(/\s+/g, " ").trim();

    return `${greeting}

${intro} ${projectLine}

${cleanMessage}

Please let me know your availability and the next steps.

Thank you.`;
}
