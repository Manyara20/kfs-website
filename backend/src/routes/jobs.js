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

// Middleware to log request details
router.use((req, res, next) => {
  console.log(`${req.method} /api/jobs${req.path} - User:`, req.user);
  next();
});

// GET /api/jobs - Retrieve all jobs
router.get("/", async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }
    const result = await pool.query("SELECT * FROM jobs");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// POST /api/jobs - Create a new job
router.post("/", async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }

    const { title, description, duties, requirements } = req.body;
    if (!title || !description) {
      return res.status(400).json({ error: "Title and description are required" });
    }

    const result = await pool.query(
      "INSERT INTO jobs (title, description, duties, requirements, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [title, description, duties || null, requirements || null, req.user.id]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error creating job:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// PUT /api/jobs/:id - Update an existing job
router.put("/:id", async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }

    const { id } = req.params;
    const { title, description, duties, requirements } = req.body;

    const result = await pool.query(
      "UPDATE jobs SET title = $1, description = $2, duties = COALESCE($3, duties), requirements = COALESCE($4, requirements), updated_at = NOW() WHERE id = $5 AND archived = FALSE RETURNING *",
      [title, description, duties || null, requirements || null, id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Job not found or already archived" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error updating job:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// DELETE /api/jobs/:id - Delete a job
router.delete("/:id", async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }

    const { id } = req.params;
    const result = await pool.query("DELETE FROM jobs WHERE id = $1 AND archived = FALSE", [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Job not found or already archived" });
    }

    res.json({ message: "Job deleted successfully" });
  } catch (error) {
    console.error("Error deleting job:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// PATCH /api/jobs/:id/archive - Toggle archive status of a job
router.patch("/:id/archive", async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }

    const { id } = req.params;
    const result = await pool.query(
      "UPDATE jobs SET archived = NOT archived, updated_at = NOW() WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Job not found" });
    }

    const action = result.rows[0].archived ? "archived" : "unarchived";
    res.json({ message: `Job ${action} successfully`, job: result.rows[0] });
  } catch (error) {
    console.error("Error toggling archive:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;