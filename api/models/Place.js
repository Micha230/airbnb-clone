const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: { type: String, required: true },
  address: { type: String, required: true },
  photos: [String],
  description: String,
  perks: [String],
  extraInfo: String,
  checkIn: { type: Number, required: true },
  checkOut: { type: Number, required: true },
  maxGuests: { type: Number, required: true },
  price: { type: Number, required: true },
});

const PlaceModel = mongoose.model("Place", placeSchema);
module.exports = PlaceModel;

// checkIn: { type: Date, required: true },
