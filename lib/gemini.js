import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GENERATIVE_API_KEY;

if (!apiKey) {
  throw new Error("GENERATIVE_API_KEY is missing in .env.local");
}

const genAI = new GoogleGenerativeAI(apiKey);

export const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash"
});
