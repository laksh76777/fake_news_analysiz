import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export interface DetectionResult {
  isFake: boolean;
  confidence: number;
  modelOutputs: {
    logisticRegression: number;
    naiveBayes: number;
    tfidfRelevance: number;
  };
  explanation: string;
}

export async function detectFakeNews(text: string): Promise<DetectionResult> {
  const prompt = `
    You are a machine learning model simulator for a Fake News Detection project.
    The user is asking to analyze the following text: "${text}"
    
    Return a JSON object with the following structure:
    {
      "isFake": boolean,
      "confidence": number (between 0 and 1),
      "modelOutputs": {
        "logisticRegression": number (simulated probability of being fake),
        "naiveBayes": number (simulated probability of being fake),
        "tfidfRelevance": number (simulated score representing how many 'triggering' words were found after TF-IDF transformation)
      },
      "explanation": "A short 2-3 sentence explanation of the indicators found (e.g., sensationalist language, lack of citations, biased framing) as a human-readable summary."
    }
    
    Ensure the simulated probabilities are consistent with whether the news is fake or real.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    const result = JSON.parse(response.text || "{}");
    return result;
  } catch (error) {
    console.error("Detection failed:", error);
    throw new Error("Could not analyze text. Please try again.");
  }
}
