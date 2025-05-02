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

// Test database connection
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
router.post("/", async (req, res) => {
  try {
    if (!req.user || (req.user.role !== "admin" && req.user.role !== "communication_officer")) {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }

    const { title, date, time, venue, flag } = req.body;
    if (!title || !date || !time || !venue || !flag) {
      return res.status(400).json({ error: "Title, date, time, venue, and flag are required" });
    }

    const result = await pool.query(
      "INSERT INTO events (title, date, time, venue, flag, user_id, archived, updated_at) VALUES ($1, $2, $3, $4, $5, $6, $7, NOW()) RETURNING *",
      [title, date, time, venue, flag, req.user.id, false]
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
router.put("/:id", async (req, res) => {
  try {
    if (!req.user || (req.user.role !== "admin" && req.user.role !== "communication_officer")) {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }

    const { id } = req.params;
    const { title, date, time, venue, flag } = req.body;
    if (!title || !date || !time || !venue || !flag) {
      return res.status(400).json({ error: "Title, date, time, venue, and flag are required" });
    }

    const result = await pool.query(
      "UPDATE events SET title = $1, date = $2, time = $3, venue = $4, flag = $5, updated_at = NOW() WHERE id = $6 RETURNING *",
      [title, date, time, venue, flag, id]
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
    const result = await pool.query("DELETE FROM events WHERE id = $1 RETURNING *", [id]);

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