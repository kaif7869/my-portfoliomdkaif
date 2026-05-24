import { GoogleGenerativeAI } from "@google/generative-ai";

export function getGeminiModel(apiKey, model = "gemini-2.0-flash") {
    const genAI = new GoogleGenerativeAI(apiKey);

    return genAI.getGenerativeModel({
        model
    });
}
