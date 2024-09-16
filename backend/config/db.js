// config/db.js

const { Pool } = require("pg");
const mongoose = require("mongoose");

// PostgreSQL Pool configuration
const pool = new Pool({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// MongoDB connection function
const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("MongoDB connected...");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};

module.exports = {
  pool,
  connectMongoDB,
};
