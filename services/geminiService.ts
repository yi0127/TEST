import { GoogleGenAI } from "@google/genai";

export const generateKpopAnalysis = async (
  mbti: string,
  groupName: string,
  answers: string[]
): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const prompt = `
      User MBTI: ${mbti}
      Assigned K-pop Group: ${groupName}
      
      Context: Creating a fun, "Y2K aesthetic" marketing psychological test result for a K-pop fan girl (age 16-30).
      
      Task: Generate a short, catchy, and slightly "chunibyo" (dreamy/dramatic) "Debut Concept" for this user.
      Don't mention the MBTI code directly.
      Focus on why they fit ${groupName}.
      
      Output Format (keep it under 100 words, use emojis):
      "🌟 你的出道擔當：[Creative Role Name]
       ✨ 粉絲入坑點：[One sentence reason]
       💌 給你的應援詞：[Short encouraging quote]"
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "系統忙線中，但你的魅力無法被阻擋！✨";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "連接宇宙訊號失敗... 但你是最棒的！💖";
  }
};