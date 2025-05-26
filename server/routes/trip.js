const express = require("express");
const mongoose = require("mongoose");
const Trip = require("../models/Trip");
const router = express.Router();

// Create a new trip
router.post("/create", async (req, res) => {
  try {
    const { title, userId } = req.body;

    if (!title || !userId) {
      return res.status(400).json({ message: "Title and userId are required" });
    }

    const trip = new Trip({
      title,
      collaborators: [userId]
    });

    await trip.save();
    res.status(201).json({ message: "Trip created", trip });
  } catch (error) {
    console.error("Error creating trip:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Get all trips for a user
router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const trips = await Trip.find({ collaborators: userId });
    res.json(trips);
  } catch (error) {
    console.error("Error fetching trips:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
