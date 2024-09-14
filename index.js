const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

//import routes

const adminRoutes = require("./routes/admin");

require("dotenv").config();

//middlewares
app.use(cors());
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));
app.use(morgan("dev"));
app.use("/api", adminRoutes);

//connect to DB
const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.PRODDB).then(() => {
      console.log("DB is connected");
    });
  } catch (err) {
    console.log(err);
  }
};

connectDB();

const connectApp = () => {
  try {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
connectApp();
