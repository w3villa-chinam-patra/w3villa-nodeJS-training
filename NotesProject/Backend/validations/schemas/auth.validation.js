const Joi = require("joi");
const rules = require("../rules");

const commonAuthFields = {
  username: rules.username,
  password: rules.password,
};

registerSchema = Joi.object({
  name: rules.name,
  ...commonAuthFields,
});

loginSchema = Joi.object({
  ...commonAuthFields,
});

module.exports = {
  registerSchema,
  loginSchema,
};
