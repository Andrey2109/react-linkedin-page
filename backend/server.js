require("dotenv").config();
const express = require("express");
const cors = require("cors");

const { pool, connectMongoDB } = require("./config/db"); // Import DB config
const corsOptions = require("./config/corsConfig"); // Import CORS config

const authRouter = require("./routes/auth");
const adminRouter = require("./routes/admin");
const profilesRouter = require("./routes/profiles"); // Import profile routes

const app = express();
const port = process.env.PORT;

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Connect to MongoDB
connectMongoDB();

// Routes
app.use("/api/auth", authRouter);
app.use("/api/admin", adminRouter);
app.use("/api/profiles", profilesRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
