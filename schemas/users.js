const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user: {
    type: "string",
    required: true,
    unique: true,
  },
  password: {
    type: "string",
    required: true,
  },
});

module.exports = {
  userSchema,
}