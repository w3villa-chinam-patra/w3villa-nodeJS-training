const AppError = require("../error/AppError");
const { noteService } = require("../services");
const { ErrorMessages } = require("../constants/ErrorMessages");
const { SuccessMessages } = require("../constants/SuccessMessages");
const { successResponse } = require("../handlers/response.handler");
const logger = require("../utils/logger.util");
const LogMessages = require("../constants/LogMessages");

module.exports = {
  create: async (req, res, next) => {
    // fetch notes from the body
    const { note } = req.body;

    // fetch user id from request
    const userId = req.userId;

    try {
      // insert the note into the database
      const insertedNote = await noteService.insertNote(note, userId);

      // check if there is any error
      if (!insertedNote) {
        // logger.error(LogMessages.NOTE.ERROR.CREATE_FAILED);
        return next(new AppError(ErrorMessages.NOTE.CREATE_FAILED));
      }

      logger.info(LogMessages.NOTE.INFO.CREATE_SUCCESS);
      return successResponse(
        res,
        SuccessMessages.NOTE.CREATE_SUCCESS,
        insertedNote
      );
    } catch (error) {
      // logger.error(
      //   `${LogMessages.NOTE.ERROR.CREATE_FAILED} Error:${error.message}`
      // );
      return next(
        new AppError(ErrorMessages.NOTE.CREATE_FAILED),
        error.message
      );
    }
  },

  read: async (req, res, next) => {
    // fetch the user id from the request
    const userId = req.userId;
    // throw new Error("Error here...")
    try {
      // fetch user's notes from the database
      const allNotesOfUser = await noteService.getAllNotesByUserId(userId);

      // check if the notes are fetched correctly
      if (!allNotesOfUser) {
        // logger.error(LogMessages.NOTE.ERROR.FETCH_ALL_FAILED);
        return next(new AppError(ErrorMessages.NOTE.FETCH_ALL_FAILED));
      }

      logger.info(LogMessages.NOTE.INFO.FETCH_ALL_SUCCESS);
      return successResponse(
        res,
        SuccessMessages.NOTE.FETCH_ALL_SUCCESS,
        allNotesOfUser
      );
    } catch (error) {
      // logger.error(
      //   `${LogMessages.NOTE.ERROR.FETCH_ALL_FAILED} Error: ${error.message}`
      // );
      next(new AppError(ErrorMessages.NOTE.FETCH_ALL_FAILED), error.message);
    }
  },

  singleRead: async (req, res, next) => {
    // fetch the note id from the URL parameter
    const id = req.params.id;
    try {
      // find the note from the database
      const fetchedNote = await noteService.getNoteById(id);

      // check whether the note is fetched properly
      if (!fetchedNote) {
        // logger.error(LogMessages.NOTE.ERROR.FETCH_FAILED);
        return next(new AppError(ErrorMessages.NOTE.FETCH_FAILED));
      }

      logger.info(LogMessages.NOTE.INFO.FETCH_SUCCESS);
      return successResponse(
        res,
        SuccessMessages.NOTE.FETCH_SUCCESS,
        fetchedNote
      );
    } catch (error) {
      // logger.error(
      //   `${LogMessages.NOTE.ERROR.FETCH_FAILED} Error: ${error.message}`
      // );
      return next(new AppError(ErrorMessages.NOTE.FETCH_FAILED), error.message);
    }
  },

  update: async (req, res, next) => {
    // fetch the updated notes from the body
    const updatedNote = req.body;

    try {
      // update the note
      const response = await noteService.updateNote(
        updatedNote._id,
        updatedNote.note
      );

      // check whether the required note was present in the database or not.
      if (!response || !response.matchedCount) {
        // logger.error(LogMessages.NOTE.ERROR.UPDATE_FAILED);
        return next(new AppError(ErrorMessages.NOTE.UPDATE_FAILED));
      }

      logger.info(LogMessages.NOTE.INFO.UPDATE_SUCCESS);
      return successResponse(res, SuccessMessages.NOTE.UPDATE_SUCCESS);
    } catch (error) {
      // logger.error(
      //   `${LogMessages.NOTE.ERROR.UPDATE_FAILED} Error: ${error.message}`
      // );
      return next(
        new AppError(ErrorMessages.NOTE.UPDATE_FAILED),
        error.message
      );
    }
  },

  delete: async (req, res, next) => {
    // fetch the note id from the URL parameter
    const id = req.params.id;

    try {
      // delete the note from the database
      const response = await noteService.deleteNote(id);

      // check if the note deleted successfully
      if (!response) {
        // logger.error(LogMessages.NOTE.ERROR.DELETE_FAILED);
        return next(new AppError(ErrorMessages.NOTE.DELETE_FAILED));
      }

      logger.info(LogMessages.NOTE.INFO.DELETE_SUCCESS);
      return successResponse(res, SuccessMessages.NOTE.DELETE_SUCCESS);
    } catch (error) {
      // logger.error(
      //   `${LogMessages.NOTE.ERROR.DELETE_FAILED} Error: ${error.message}`
      // );
      return next(
        new AppError(ErrorMessages.NOTE.DELETE_FAILED),
        error.message
      );
    }
  },
};
