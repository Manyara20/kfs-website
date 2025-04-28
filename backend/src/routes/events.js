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

// GET /api/jobs - Retrieve all jobs (admin or human_resource)
router.get("/", async (req, res) => {
  try {
    if (
      !req.user ||
      (req.user.role !== "admin" && req.user.role !== "human_resource")
    ) {
      return res
        .status(403)
        .json({ error: "Forbidden: Insufficient permissions" });
    }
    const result = await pool.query("SELECT * FROM jobs");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching jobs:", {
      message: error.message,
      stack: error.stack,
      code: error.code,
    });
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

// POST /api/jobs - Create a new job (admin or human_resource)
router.post("/", async (req, res) => {
  try {
    if (
      !req.user ||
      (req.user.role !== "admin" && req.user.role !== "human_resource")
    ) {
      return res
        .status(403)
        .json({ error: "Forbidden: Insufficient permissions" });
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
    console.error("Error creating job:", {
      message: error.message,
      stack: error.stack,
      code: error.code,
    });
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

// PUT /api/jobs/:id - Update an existing job (admin or human_resource)
router.put("/:id", async (req, res) => {
  try {
    if (
      !req.user ||
      (req.user.role !== "admin" && req.user.role !== "human_resource")
    ) {
      return res
        .status(403)
        .json({ error: "Forbidden: Insufficient permissions" });
    }

    const { id } = req.params;
    const { title, description, duties, requirements } = req.body;

    const result = await pool.query(
      "UPDATE jobs SET title = $1, description = $2, duties = COALESCE($3, duties), requirements = COALESCE($4, requirements), updated_at = NOW() WHERE id = $5 RETURNING *",
      [title, description, duties || null, requirements || null, id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Job not found" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error updating job:", {
      message: error.message,
      stack: error.stack,
      code: error.code,
    });
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

// DELETE /api/jobs/:id - Delete a job (admin or human_resource)
router.delete("/:id", async (req, res) => {
  try {
    if (
      !req.user ||
      (req.user.role !== "admin" && req.user.role !== "human_resource")
    ) {
      return res
        .status(403)
        .json({ error: "Forbidden: Insufficient permissions" });
    }

    const { id } = req.params;
    const result = await pool.query("DELETE FROM jobs WHERE id = $1", [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Job not found" });
    }

    res.json({ message: "Job deleted successfully" });
  } catch (error) {
    console.error("Error deleting job:", {
      message: error.message,
      stack: error.stack,
      code: error.code,
    });
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

// PATCH /api/jobs/:id/archive - Toggle archive status of a job (admin or human_resource)
router.patch("/:id/archive", async (req, res) => {
  try {
    if (
      !req.user ||
      (req.user.role !== "admin" && req.user.role !== "human_resource")
    ) {
      return res
        .status(403)
        .json({ error: "Forbidden: Insufficient permissions" });
    }

    const { id } = req.params;
    if (!id || isNaN(id)) {
      return res.status(400).json({ error: "Invalid job ID" });
    }

    console.log("Toggling archive for job ID:", id);
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
    console.error("Error toggling archive:", {
      message: error.message,
      stack: error.stack,
      code: error.code,
    });
    if (error.code === "42703") {
      return res
        .status(500)
        .json({
          error: "Database schema error: Missing column",
          details: error.message,
        });
    }
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

module.exports = router;