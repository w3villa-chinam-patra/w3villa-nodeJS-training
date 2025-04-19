import { SuccessMessages, ErrorMessages } from "../constants/index.js";
import AppError from "../errors/AppError.js";
import { successResponse } from "../handlers/successResponse.handler.js";
import { generateToken, getHashedPassword, isMatch } from "../helpers/index.js";
import { createUser, getUserByUsername } from "../services/index.js";
import logger from "../utility/logger.js";

export const registerHandler = async (req, res, next) => {
  const { name, username, password } = req.body;
  try {
    // check whether user already exists
    const dbRes = await getUserByUsername(username);
    if (dbRes) {
      return next(new AppError(ErrorMessages.USER.ALREADY_EXIST));
    }

    // hash the password
    const hashedPassword = await getHashedPassword(password);
    await createUser(name, username, hashedPassword);

    logger.info(SuccessMessages.AUTH.REGISTER_SUCCESS.responseMessage);
    return successResponse(res, SuccessMessages.AUTH.REGISTER_SUCCESS);
  } catch (error) {
    return next(
      new AppError(ErrorMessages.AUTH.REGISTER_FAILED, error.message)
    );
  }
};

export const loginHandler = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    // check if the user exists or not
    const dbRes = await getUserByUsername(username);
    if (!dbRes) {
      return next(new AppError(ErrorMessages.USER.NOT_FOUND));
    }

    // check if password matches or not
    const userPassword = dbRes.password;
    if (!(await isMatch(password, userPassword))) {
      return next(new AppError(ErrorMessages.AUTH.INVALID_CREDENTIALS));
    }

    // generate jwt token
    const token = generateToken(dbRes.id);

    logger.info(SuccessMessages.AUTH.LOGIN_SUCCESS.responseMessage);
    return successResponse(res, SuccessMessages.AUTH.LOGIN_SUCCESS, {
      token,
      id: dbRes.id,
    });
  } catch (error) {
    return next(new AppError(ErrorMessages.AUTH.LOGIN_FAILED, error.message));
  }
};
