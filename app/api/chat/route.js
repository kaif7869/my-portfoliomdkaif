import { getGeminiModel } from "@/lib/gemini";

export const dynamic = "force-dynamic";

const PORTFOLIO_PROMPT = `
You are an AI assistant for Mohammad Kaif's portfolio website.

Answer only portfolio-related questions:
- Skills
- Projects
- Experience
- Education
- Contact
- Technologies

Keep answers:
- Professional
- Friendly
- Short
- Clear

If user asks unrelated questions,
reply politely that you only answer portfolio questions.
`;

export async function POST(req) {
    let latestMessage = "";

    try {
        const apiKey = process.env.GENERATIVE_API_KEY || process.env.GEMINI_API_KEY;

        if (!apiKey) {
            return Response.json({
                success: false,
                error: "Missing API Key"
            }, {
                status: 500
            });
        }

        const body = await req.json();
        const messages = body ? .messages;
        const message = body ? .message;

        latestMessage =
            message ||
            messages ?
            .filter(item => item.role === "user") ?
            .at(-1) ?
            .text ?
            .trim();

        if (!latestMessage) {
            return Response.json({
                error: "Please type a message first."
            }, {
                status: 400
            });
        }

        const conversation = Array.isArray(messages) ?
            messages
            .slice(-8)
            .map(item => `${item.role === "user" ? "User" : "Assistant"}: ${item.text}`)
            .join("\n") :
            `User: ${latestMessage}`;

        const prompt = `
${PORTFOLIO_PROMPT}

Portfolio facts:
- Name: Mohammad Kaif Devalapur
- Role: Full Stack Developer
- Skills: React, Next.js, Node.js, Express.js, MongoDB, Tailwind CSS, JavaScript
- Experience: 2+ years
- Projects: portfolio website, AI chat assistant, full stack dashboard-style apps
- Location: India
- Availability: Freelance and project work

Conversation:
${conversation}

Reply to the latest user message.
`;

        const model = getGeminiModel(apiKey);
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        return Response.json({
            success: true,
            answer: text
        });
    } catch (error) {
        console.error(error);

        return Response.json({
            success: true,
            fallback: true,
            answer: getFallbackAnswer(latestMessage)
        });
    }
}

function getFallbackAnswer(message = "") {
    const text = message.toLowerCase();

    if (text.includes("skill") || text.includes("technology") || text.includes("stack")) {
        return "Mohammad Kaif works with React, Next.js, Node.js, Express.js, MongoDB, Tailwind CSS, and JavaScript.";
    }

    if (text.includes("project") || text.includes("work")) {
        return "His projects include this portfolio website, an AI chat assistant, and full stack dashboard-style applications using the MERN and Next.js stack.";
    }

    if (text.includes("experience")) {
        return "Mohammad Kaif has 2+ years of practical full stack development experience focused on responsive UI, backend APIs, and MongoDB integrations.";
    }

    if (text.includes("education") || text.includes("study") || text.includes("learn")) {
        return "His learning path focuses on full stack web development, computer science fundamentals, React, Next.js, Node.js, MongoDB, and deployment workflows.";
    }

    if (text.includes("contact") || text.includes("hire") || text.includes("email")) {
        return "You can contact Mohammad Kaif from the Contact page for freelance work, collaboration, or full stack development projects.";
    }

    return "I can help with Mohammad Kaif's portfolio including skills, projects, experience, education, and contact details.";
}