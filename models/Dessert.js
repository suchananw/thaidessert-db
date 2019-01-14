const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const DessertSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  squareimg: {
    type: String,
    required: false
  },
  type: {
    type: String,
    required: false
  },
  ingredients: {
    type: [String],
    required: false
  }
});

module.exports = Dessert = mongoose.model("desserts", DessertSchema);
