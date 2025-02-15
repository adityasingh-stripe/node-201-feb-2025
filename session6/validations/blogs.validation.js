const Joi = require("joi");

const blogSearchSchema = Joi.object({
  title: Joi.string(),
  author: Joi.string().email(),
}).or("title", "author");

module.exports = { blogSearchSchema };
