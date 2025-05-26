const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  title: String,
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  collaborators: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  itinerary: [{
    day: Number,
    activities: [String],
  }],
});

module.exports = mongoose.model("Trip", tripSchema);