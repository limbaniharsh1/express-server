const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  password: String,
  email: String,
  number: Number,
});

let user = mongoose.model("user", userSchema);
module.exports = user;
