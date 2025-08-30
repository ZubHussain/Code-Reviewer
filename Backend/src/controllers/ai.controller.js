import { generateContent } from "../services/ai.service.js";

export const getReview = async (req, res) => {
  try {
    const code = req.body.code;
    if (!code) {
      return res.status(400).json({ error: "Prompt is required" });
    }
    const result = await generateContent(code);
    res.json({ response: result });
  } catch (err) {
    res.status(500).json({ error: "Failed to generate response" });
  }
};
