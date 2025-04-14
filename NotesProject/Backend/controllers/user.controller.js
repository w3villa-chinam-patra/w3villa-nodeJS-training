const { ErrorMessages } = require("../constants/ErrorMessages.js");
const { SuccessMessages } = require("../constants/SuccessMessages.js");
const User = require("../models/user.model.js");
const {
  successResponse,
} = require("../handlers/response.handler");
const { userService } = require("../services");
const AppError = require("../error/AppError.js");
const { StatusCodes } = require("http-status-codes");
const logger = require("../utils/logger.util.js");
const LogMessages = require("../constants/LogMessages.js");

const fetchAllUsers = async (req, res, next) => {
  try {
    // fetch all users from the database
    const allUsers = await userService.getAllUsers();

    logger.info(LogMessages.USER.INFO.FETCH_ALL_SUCCESS);
    return successResponse(
      res,
      SuccessMessages.USER.FETCH_ALL_SUCCESS,
      allUsers
    );
  } catch (error) {
    // logger.error(
    //   `${LogMessages.USER.ERROR.FETCH_ALL_FAILED} Error: ${error.message}`
    // );
    return next(
      new AppError(ErrorMessages.USER.FETCH_ALL_FAILED),
      error.message
    );
  }
};

const fetchSingleUser = async (req, res, next) => {
  // fetch the user id from the URL parameter
  const id = req.params.id;
  try {
    // fetch the user based on the user id
    const singleUser = await userService.getUserByCondition({ _id: id });

    // extra check
    if (!singleUser) {
      // logger.error(LogMessages.USER.ERROR.FETCH_FAILED);
      return next(new AppError(ErrorMessages.USER.FETCH_FAILED));
    }

    logger.info(LogMessages.USER.INFO.FETCH_SUCCESS);
    return successResponse(res, SuccessMessages.USER.FETCH_SUCCESS, singleUser);
  } catch (error) {
    // logger.error(
    //   `${LogMessages.USER.ERROR.FETCH_FAILED} Error: ${error.message}`
    // );
    return next(new AppError(ErrorMessages.USER.FETCH_FAILED), error.message);
  }
};

const deleteSingleUser = async (req, res, next) => {
  // fetch the user id from the URL parameter
  const id = req.params.id;

  try {
    // delete the user from the database
    const response = await userService.deleteUserById(id);

    // additional checks
    if (!response) {
      // logger.error(LogMessages.USER.ERROR.DELETE_FAILED);
      return next(new AppError(ErrorMessages.USER.DELETE_FAILED));
    }

    logger.info(LogMessages.USER.INFO.DELETE_SUCCESS);
    return successResponse(res, SuccessMessages.USER.DELETE_SUCCESS);
  } catch (error) {
    // logger.error(
    //   `${LogMessages.USER.ERROR.DELETE_FAILED} Error: ${error.message}`
    // );
    return next(new AppError(ErrorMessages.USER.DELETE_FAILED), error.message);
  }
};

const updateUser = async (req, res, next) => {
  // fetch the updated user details from the body
  const updatedDataOfUser = req.body;

  // check if updated user was present in the body or not
  if (!updatedDataOfUser)
    return next(new AppError(ErrorMessages.USER.UPDATE_FAILED));

  try {
    // find the user based on user id and update the user details
    const response = await userService.updateUserById(updatedDataOfUser._id, {
      username: updatedDataOfUser.username,
      name: updatedDataOfUser.name,
    });

    // additional check
    if (!response) {
      // logger.error(LogMessages.USER.ERROR.UPDATE_FAILED);
      return next(new AppError(ErrorMessages.USER.UPDATE_FAILED));
    }

    logger.info(LogMessages.USER.INFO.UPDATE_SUCCESS);
    return successResponse(res, SuccessMessages.USER.UPDATE_SUCCESS);
  } catch (error) {
    // logger.error(
    //   `${LogMessages.USER.ERROR.UPDATE_FAILED} Error: ${error.message}`
    // );
    return next(new AppError(ErrorMessages.USER.UPDATE_FAILED), error.message);
  }
};

module.exports = {
  fetchAllUsers,
  fetchSingleUser,
  deleteSingleUser,
  updateUser,
};
