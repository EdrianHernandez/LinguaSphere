import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

/**
 * Checks the grammar of a given string using the Gemini AI model.
 * @param {string} text
 */
export const checkGrammar = async (text) => {
  if (!apiKey) {
    return "API Key is missing. Unable to check grammar.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a helpful language tutor. Check the following text for grammar errors. 
      If there are errors, correct them and briefly explain the rule in a friendly, encouraging tone. 
      If it is correct, give a compliment.
      Keep the response short (under 50 words).
      
      Text: "${text}"`,
    });
    return response.text || "Could not analyze text.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Oops! Our AI tutor is taking a nap. Try again later.";
  }
};
