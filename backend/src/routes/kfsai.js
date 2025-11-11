// routes/assistant.js or just paste in server.js
import OpenAI from 'openai';
import express from 'express';
const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const ASSISTANT_ID = process.env.ASSISTANT_ID;

// 1. Upload PDF & attach to assistant (one thread can have many files)
router.post('/upload-pdf', async (req, res) => {
  try {
    const file = await openai.files.create({
      file: req.files.file,       // using express-fileupload or multer
      purpose: "assistants",
    });

    // Attach to your global assistant (or create per-user thread later)
    await openai.beta.assistants.files.create(ASSISTANT_ID, {
      file_id: file.id
    });

    res.json({ success: true, message: "PDF uploaded & indexed instantly!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 2. Create thread + send message + get reply
router.post('/ask', async (req, res) => {
  const { message, thread_id } = req.body;  // thread_id optional for conversation history

  try {
    let thread;
    if (thread_id) {
      thread = { id: thread_id };
    } else {
      thread = await openai.beta.threads.create();
    }

    await openai.beta.threads.messages.create(thread.id, {
      role: "user",
      content: message
    });

    const run = await openai.beta.threads.runs.create(thread.id, {
      assistant_id: ASSISTANT_ID
    });

    // Poll until complete (simple way)
    let runStatus;
    do {
      await new Promise(r => setTimeout(r, 1000));
      runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
    } while (runStatus.status !== 'completed');

    const messages = await openai.beta.threads.messages.list(thread.id);
    const assistantReply = messages.data[0].content[0].text.value;

    res.json({
      answer: assistantReply,
      thread_id: thread.id   // send back to frontend to continue conversation
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;