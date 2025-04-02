const express = require("express");
const { Pool } = require("pg");
const router = express.Router();

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

// Test database connection on startup
pool.connect((err, client, release) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Database connected successfully");
  release();
});

// Middleware to log request details
router.use((req, res, next) => {
  console.log(`${req.method} /api/events${req.path} - User:`, req.user);
  next();
});

// GET /api/events - Retrieve all active events (admin only)
router.get("/", async (req, res) => {
  try {
    if (!req.user || req.user.role !== "admin") {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }
    const result = await pool.query("SELECT * FROM events WHERE archived = FALSE");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

// POST /api/events - Create a new event (admin only)
router.post("/", async (req, res) => {
  try {
    if (!req.user || req.user.role !== "admin") {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }

    const { title, date, time, venue, flag } = req.body;
    if (!title || !date || !time || !venue) {
      return res.status(400).json({ error: "Title, date, time, and venue are required" });
    }

    const result = await pool.query(
      "INSERT INTO events (title, date, time, venue, flag, user_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [title, date, time, venue, flag || "happening", req.user.id]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

// PUT /api/events/:id - Update an existing event (admin only)
router.put("/:id", async (req, res) => {
  try {
    if (!req.user || req.user.role !== "admin") {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }

    const { id } = req.params;
    const { title, date, time, venue, flag } = req.body;

    const result = await pool.query(
      "UPDATE events SET title = $1, date = $2, time = $3, venue = $4, flag = COALESCE($5, flag), updated_at = NOW() WHERE id = $6 AND archived = FALSE RETURNING *",
      [title, date, time, venue, flag || null, id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Event not found or already archived" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error updating event:", error);
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

// DELETE /api/events/:id - Delete an event (admin only)
router.delete("/:id", async (req, res) => {
  try {
    if (!req.user || req.user.role !== "admin") {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }

    const { id } = req.params;
    const result = await pool.query("DELETE FROM events WHERE id = $1 AND archived = FALSE", [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Event not found or already archived" });
    }

    res.json({ message: "Event deleted successfully" });
  } catch (error) {
    console.error("Error deleting event:", error);
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

// PATCH /api/events/:id/archive - Archive an event (admin only)
router.patch("/:id/archive", async (req, res) => {
  try {
    if (!req.user || req.user.role !== "admin") {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }

    const { id } = req.params;
    const result = await pool.query(
      "UPDATE events SET archived = TRUE, updated_at = NOW() WHERE id = $1 AND archived = FALSE RETURNING *",
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Event not found or already archived" });
    }

    res.json({ message: "Event archived successfully", event: result.rows[0] });
  } catch (error) {
    console.error("Error archiving event:", error);
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

module.exports = router;