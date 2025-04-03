const notesRouter = require("express").Router();
const { notesController } = require("../controllers");

notesRouter
  .route("/")
  .get(notesController.getAllNotesHandler)
  .post(notesController.create)
  .put(notesController.updateNoteHandler);

notesRouter
  .route("/:id")
  .get(notesController.getNoteByIdHandler)
  .delete(notesController.deleteNoteByIdHandler);

module.exports = notesRouter;
