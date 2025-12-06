// src/routes/assistant.js
const express = require("express");
const OpenAI = require("openai");
require("dotenv").config();

const router = express.Router();

// Initialize OpenAI client
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// In-memory threads to remember chat history
const threads = {};

// POST /ask
// POST /ask
router.post("/ask", async (req, res) => {
  try {
    const { message, thread_id } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    let messages = threads[thread_id] || [];
    messages.push({ role: "user", content: message });

    const response = await client.chat.completions.create({
      model: "gpt-3.5-turbo", // use a model you have access to
      messages,
    });

    const assistantMsg = response.choices[0].message.content;
    messages.push({ role: "assistant", content: assistantMsg });

    const id = thread_id || Date.now().toString();
    threads[id] = messages;

    res.json({ answer: assistantMsg, thread_id: id });

  } catch (err) {
    console.error("ASK ERROR:", err);

    // Handle rate limit gracefully
    if (err.code === "insufficient_quota" || err.status === 429) {
      return res.status(429).json({ error: "Quota exceeded. Please try later." });
    }

    res.status(500).json({ error: err.toString() });
  }
});

module.exports = router;
