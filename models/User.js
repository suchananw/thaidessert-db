const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  userID: {
    type: String,
    required: true
  },
  current_dessert: {
    type: String,
    required: true
  },
  current_topic: {
    type: String,
    required: true
  }
});

module.exports = User = mongoose.model("users", UserSchema);
