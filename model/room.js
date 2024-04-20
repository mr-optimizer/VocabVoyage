const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  users: [
    {
      name: String,
    },
  ],
  chat: [{ sender: String, message: String }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Room", roomSchema);
