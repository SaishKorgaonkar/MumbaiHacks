const express = require("express");
const dotenv = require("dotenv");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const fetch = require("node-fetch");
const cors = require("cors");

// Load environment variables
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Initialize Google Generative AI
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Predefined festival table
const festivals = [
  { name: "Diwali", start: "10-25", end: "11-30" },
  { name: "Holi", start: "03-01", end: "03-15" },
  { name: "Dussehra", start: "10-01", end: "10-15" },
  { name: "Raksha Bandhan", start: "08-10", end: "08-25" },
  // Add other festivals as needed
];

// Helper function to get the current festival if any
function getCurrentFestival() {
  const today = new Date();
  const currentMonthDay = `${String(today.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(today.getDate()).padStart(2, "0")}`;

  for (const festival of festivals) {
    if (currentMonthDay >= festival.start && currentMonthDay <= festival.end) {
      return festival.name;
    }
  }
  return null; // No current festival
}

// Helper function to generate a marketing prompt
function generateMarketingPrompt({
  product,
  targetAudience,
  campaignGoal,
  tone,
  festival,
  companyName,
  callToAction,
  promptTemplate,
}) {
  return `Create a marketing campaign for a product. 
          Company: ${companyName}.
          Product: ${product}. 
          Target Audience: ${targetAudience}. 
          Campaign Goal: ${campaignGoal}. 
          Tone: ${tone}. 
          Festival: ${
            festival ? `Align with ${festival} festival.` : "General campaign"
          }
          ${promptTemplate ? `Custom Prompt: ${promptTemplate}.` : ""}
          You're only supposed to provide a tagline, captions, and recommended hashtags. Call to Action: ${callToAction} Keep it very short and don't try to use markdown`;
}

// Helper function to generate image using Hugging Face API and return it as a Base64 string
async function generateImage(description) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image",
    {
      headers: {
        Authorization: "Bearer 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",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ inputs: description }),
    }
  );
  const result = await response.blob();
  const buffer = Buffer.from(await result.arrayBuffer());
  return buffer.toString("base64"); // Convert buffer to Base64 string
}

// Generate best campaign time
function getBestCampaignTime() {
  const currentHour = new Date().getHours();
  return currentHour < 12
    ? "Afternoon"
    : currentHour < 18
    ? "Evening"
    : "Tomorrow Morning";
}

// Main POST endpoint
app.post("/generate-campaign", async (req, res) => {
  try {
    const {
      product,
      targetAudience,
      campaignGoal,
      tone,
      companyName,
      callToActionLink,
      promptTemplate,
    } = req.body;
    console.log(promptTemplate);

    // Validate input
    if (
      !product ||
      !targetAudience ||
      !campaignGoal ||
      !tone ||
      !companyName ||
      !callToActionLink
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Product, target audience, campaign goal, tone, company name, and call to action link are required.",
      });
    }

    // Get current festival (if any)
    const festival = getCurrentFestival();
    const prompt = generateMarketingPrompt({
      product,
      targetAudience,
      campaignGoal,
      tone,
      festival,
      companyName,
      callToAction: callToActionLink,
      promptTemplate,
    });

    // Generate content with Google Generative AI
    const result = await model.generateContent(prompt);
    const text = result.response.text();
    console.log(result.response.text());

    // Generate campaign image as Base64
    const imageDescription = `${product} campaign featuring ${
      festival ? festival : "a general theme"
    } with a focus on ${targetAudience}. Company: ${companyName}. Tone: ${tone}. ${promptTemplate}`;
    console.log("Image Description:", imageDescription);
    const imageBase64 = await generateImage(imageDescription);

    // Respond with campaign details and image blob
    res.json({
      success: true,
      details: {
        text,
        imageBase64: `data:image/png;base64,${imageBase64}`, // Send Base64-encoded image data
        bestCampaignTime: getBestCampaignTime(),
        currentFestival: festival || "None",
      },
    });
  } catch (error) {
    console.error("Error generating campaign:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to generate campaign." });
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
