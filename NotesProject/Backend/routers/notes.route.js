const notesRouter = require("express").Router();
const { notesController } = require("../controllers");
const validationMiddleware = require("../middlewares/validation.middleware");
const { createNoteSchema, updateNoteSchema } = require("../validations/schemas");

notesRouter
  .route("/")
  .get(notesController.read)
  .post(validationMiddleware(createNoteSchema), notesController.create)
  .put(validationMiddleware(updateNoteSchema), notesController.update);

notesRouter
  .route("/:id")
  .get(notesController.singleRead)
  .delete(notesController.delete);

module.exports = notesRouter;
