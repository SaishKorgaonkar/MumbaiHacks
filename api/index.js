const express = require("express");

require("dotenv").config();

const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const app = express();

app.use(express.json());

app.post("/generate", async (req, res) => {
  try {
    const prompt = req.body.prompt;
    console.log(req.body);
    if (!prompt) {
      return res
        .status(400)
        .json({ success: false, message: "Prompt is required." });
    }

    const result = await model.generateContent([prompt]);
    const text = result.response.text();

    // Return structured JSON response
    res.json({
      success: true,
      text: text,
    });
  } catch (error) {
    console.error("Error generating model:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to generate model." });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
