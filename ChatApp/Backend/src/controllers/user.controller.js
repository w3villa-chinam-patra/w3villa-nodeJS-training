import { ErrorMessages } from "../constants/ErrorMessages.js";
import { SuccessMessages } from "../constants/SuccessMessages.js";
import AppError from "../errors/AppError.js";
import { successResponse } from "../handlers/successResponse.handler.js";
import { getAllUsers, getUserById } from "../services/index.js";
import logger from "../utility/logger.js";

export const fetchAllUsersHandler = async (req, res, next) => {
  try {
    const dbRes = await getAllUsers();
    if (!dbRes) {
      return next(new AppError(ErrorMessages.USER.FETCH_ALL_FAILED));
    }

    logger.info(SuccessMessages.USER.FETCH_ALL_SUCCESS.responseMessage);
    return successResponse(res, SuccessMessages.USER.FETCH_ALL_SUCCESS, dbRes);
  } catch (error) {
    return next(
      new AppError(ErrorMessages.USER.FETCH_ALL_FAILED, error.message)
    );
  }
};

export const fetchUserById = async (req, res, next) => {
  const userId = req.params.id;
  try {
    const dbRes = await getUserById(userId);
    // check if user exists
    if (!dbRes) {
      return next(new AppError(ErrorMessages.USER.FETCH_FAILED));
    }

    logger.info(SuccessMessages.USER.FETCH_SUCCESS.responseMessage);
    return successResponse(res, SuccessMessages.USER.FETCH_SUCCESS, dbRes);
  } catch (error) {
    return next(new AppError(ErrorMessages.USER.FETCH_FAILED));
  }
};
