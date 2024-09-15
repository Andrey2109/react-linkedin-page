// models/Profile.js
console.log("Profile model loaded");
const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
  bio: {
    type: String,
  },
  // Add other fields as needed
});

module.exports = mongoose.model("Profile", ProfileSchema);
