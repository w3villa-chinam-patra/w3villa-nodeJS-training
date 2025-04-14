const Joi = require("joi");

const id = Joi.string().required();
const name = Joi.string().min(3).required();
const username = Joi.string().min(6).max(100).required();
const password = Joi.string().min(6).max(50).required();
const note = Joi.string().max(100);

module.exports = {
  id,
  name,
  username,
  password,
  note,
};
