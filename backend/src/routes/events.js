const express = require("express");
const { Pool } = require("pg");
const multer = require("multer");
const path = require("path");
const router = express.Router();

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

// Test database connection
pool.connect((err, client, release) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Database connected successfully");
  release();
});

// Multer setup
const storage = multer.diskStorage({
  destination: "./Uploads/",
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${uniqueSuffix}${path.extname(file.originalname)}`);
  },
});
const upload = multer({ storage });

// Middleware to log request details
router.use((req, res, next) => {
  console.log(`${req.method} /api/events${req.path} - User:`, req.user);
  next();
});

// GET /api/events - Retrieve all events (admin or communication_officer)
router.get("/", async (req, res) => {
  try {
    if (!req.user || (req.user.role !== "admin" && req.user.role !== "communication_officer")) {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }
    const result = await pool.query("SELECT * FROM events");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching events:", {
      message: error.message,
      stack: error.stack,
      code: error.code,
    });
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

// POST /api/events - Create a new event (admin or communication_officer)
router.post("/", upload.single("image"), async (req, res) => {
  try {
    if (!req.user || (req.user.role !== "admin" && req.user.role !== "communication_officer")) {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }

    const { title, description, date } = req.body;
    if (!title || !description || !date) {
      return res.status(400).json({ error: "Title, description, and date are required" });
    }

    const imageUrl = req.file ? `/Uploads/${req.file.filename}` : null;
    const result = await pool.query(
      "INSERT INTO events (title, description, date, image, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [title, description, date, imageUrl, req.user.id]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error creating event:", {
      message: error.message,
      stack: error.stack,
      code: error.code,
    });
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

// PUT /api/events/:id - Update an existing event (admin or communication_officer)
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    if (!req.user || (req.user.role !== "admin" && req.user.role !== "communication_officer")) {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }

    const { id } = req.params;
    const { title, description, date } = req.body;
    const imageUrl = req.file ? `/Uploads/${req.file.filename}` : null;

    const result = await pool.query(
      "UPDATE events SET title = $1, description = $2, date = $3, image = COALESCE($4, image), updated_at = NOW() WHERE id = $5 RETURNING *",
      [title, description, date, imageUrl, id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Event not found" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error updating event:", {
      message: error.message,
      stack: error.stack,
      code: error.code,
    });
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

// DELETE /api/events/:id - Delete an event (admin or communication_officer)
router.delete("/:id", async (req, res) => {
  try {
    if (!req.user || (req.user.role !== "admin" && req.user.role !== "communication_officer")) {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }

    const { id } = req.params;
    const result = await pool.query("DELETE FROM events WHERE id = $1", [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Event not found" });
    }

    res.json({ message: "Event deleted successfully" });
  } catch (error) {
    console.error("Error deleting event:", {
      message: error.message,
      stack: error.stack,
      code: error.code,
    });
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

// PATCH /api/events/:id/archive - Toggle archive status of an event (admin or communication_officer)
router.patch("/:id/archive", async (req, res) => {
  try {
    if (!req.user || (req.user.role !== "admin" && req.user.role !== "communication_officer")) {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }

    const { id } = req.params;
    if (!id || isNaN(id)) {
      return res.status(400).json({ error: "Invalid event ID" });
    }

    console.log("Toggling archive for event ID:", id);
    const result = await pool.query(
      "UPDATE events SET archived = NOT archived, updated_at = NOW() WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Event not found" });
    }

    const action = result.rows[0].archived ? "archived" : "unarchived";
    res.json({ message: `Event ${action} successfully`, event: result.rows[0] });
  } catch (error) {
    console.error("Error toggling archive:", {
      message: error.message,
      stack: error.stack,
      code: error.code,
    });
    if (error.code === "42703") {
      return res.status(500).json({ error: "Database schema error: Missing column", details: error.message });
    }
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

module.exports = router;