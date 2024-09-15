const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const User = require("../models/User");

router.get("/users", auth, admin, async (req, res) => {
  try {
    const users = await User.find().select("-password"); // Exclude passwords
    res.json(users);
  } catch (error) {
    console.error("Failed to fetch users:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
