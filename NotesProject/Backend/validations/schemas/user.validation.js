const Joi = require("joi");
const rules = require("../rules");

updateUserSchema = Joi.object({
  _id: rules.id,
  username: rules.username,
  name: rules.name,
});

module.exports = {
  updateUserSchema,
};
