const Joi = require("joi");

const loginValidationSchema = Joi.object().keys({
  username: Joi.string().required().max(25),
  password: Joi.string().required().min(8),
});

module.exports = { loginValidationSchema };
