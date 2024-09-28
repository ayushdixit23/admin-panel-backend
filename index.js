const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*", // Allow all origins (You can restrict it by specifying a URL)
    methods: ["GET", "POST"]
  }
});

require("dotenv").config();

// Import routes
const adminRoutes = require("./routes/admin");
const prositeRoutes = require("./routes/pros");

// Middlewares
app.use(cors());
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));
app.use(morgan("dev"));
app.use("/api", adminRoutes);
app.use("/api/v1", prositeRoutes);

// Connect to MongoDB
const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.PRODDB);
    console.log("DB is connected");
  } catch (err) {
    console.error("DB connection error:", err);
  }
};

connectDB();

// Start server
const connectApp = () => {
  try {
    server.listen(process.env.PORT, () => {
      console.log(`Server is running on ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Server start error:", error);
  }
};

connectApp();
