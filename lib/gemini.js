import { GoogleGenerativeAI } from "@google/generative-ai";

export function getGeminiModel(apiKey) {
    const genAI = new GoogleGenerativeAI(apiKey);

    return genAI.getGenerativeModel({
        model: "gemini-2.0-flash"
    });
}