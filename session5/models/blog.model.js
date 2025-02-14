const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true }, //Title is string
    authors: { type: [String] }, //Authors is an array of strings
    content: { type: String, default: "" }, //Content is string
    publishedAt: { type: Date, default: null }, //publishedAt is Date
  },
  {
    timestamps: true,
  }
);

const blogModel = mongoose.model("Blog", blogSchema); // if the name of the collection is not defined, it will default to plural form of model name

module.exports = blogModel;
