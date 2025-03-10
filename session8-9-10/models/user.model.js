const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: { type: String, default: "" },
  username: { type: String, unique: true, lowercase: true, required: true },
  email: { type: String, unique: true, lowercase: true, required: true },
  password: { type: String, minLength: 8 },
});

const userModel = mongoose.model("Users", userSchema);

module.exports = userModel;
