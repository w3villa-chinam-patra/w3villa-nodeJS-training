const Joi = require("joi");
const rules = require("../rules");

createNoteSchema = Joi.object({
  note: rules.note,
});

updateNoteSchema = Joi.object({
  _id: rules.id,
  note: rules.note,
});

module.exports = {
  createNoteSchema,
  updateNoteSchema,
};
