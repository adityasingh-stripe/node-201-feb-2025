const Joi = require("joi");
const { validGenders } = require("../config.js");

const userSearchSchema = Joi.object({
  gender: Joi.string().valid(...validGenders),
  age: Joi.number().integer().min(1).max(99),
}).or("gender", "age");

// const userSearchSchema = {
//   query: Joi.object({
//     gender: Joi.string().valid(...validGenders),
//     age: Joi.number().integer().min(1).max(99),
//   }).or("gender", "age"),

// }

module.exports = { userSearchSchema };
