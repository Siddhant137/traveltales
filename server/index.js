require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const userRoutes = require("./routes/user");
const tripRoutes = require("./routes/trip");

app.use("/api/users", userRoutes);
app.use("/api/trips", tripRoutes);

const connectDB = async () => {
  try {
    console.log("Mongo URI:", process.env.MONGODB_URI);

    await mongoose.connect(process.env.MONGODB_URI, {});
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

connectDB();

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:3001`);
});
