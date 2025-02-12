const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: String, //Title is string
  authors: [String], //Authors is an array of strings
  content: String, //Content is string
  publishedAt: Date, //publishedAt is Date
});

const blogModel = mongoose.model("Blog", blogSchema); // if the name of the collection is not defined, it will default to plural form of model name

module.exports = blogModel;
