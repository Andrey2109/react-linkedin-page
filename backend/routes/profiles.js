// routes/profiles.js

const express = require("express");
const { pool } = require("../config/db");
const Profile = require("../models/Profile");
const auth = require("../middleware/auth");

const router = express.Router();

// Route to get profiles from PostgreSQL
router.get("/postgres", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM profiles_example");
    res.json(rows);
  } catch (error) {
    console.error("Failed to fetch profiles:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Route to get profiles from MongoDB
router.get("/mongodb", auth, async (req, res) => {
  try {
    const profiles = await Profile.find().populate("user", [
      "username",
      "email",
    ]);
    res.json(profiles);
  } catch (error) {
    console.error("Failed to fetch profiles:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
