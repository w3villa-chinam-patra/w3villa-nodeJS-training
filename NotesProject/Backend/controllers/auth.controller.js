const AppError = require("../error/AppError");
const { successResponse } = require("../handlers/response.handler");
const { generateToken } = require("../helpers/jwt.helper");
const {
  getHashedPassword,
  passwordComparator,
} = require("../helpers/hash.helper");
const { userService } = require("../services");
const { ErrorMessages } = require("../constants/ErrorMessages");
const { SuccessMessages } = require("../constants/SuccessMessages");
const LogMessages = require("../constants/LogMessages");
const logger = require("../utils/logger.util");

module.exports = {
  register: async (req, res, next) => {
    // fetching data from body
    const { name, username, password } = req.body;

    try {
      // find the user in database
      const user = await userService.getUserByCondition({ username });

      // check if user already exists
      if (user) {
        return next(new AppError(ErrorMessages.USER.ALREADY_EXISTS));
      }

      // hashing the password
      const hashedPassword = await getHashedPassword(password);

      await userService.createUser(name, username, hashedPassword);

      logger.info(LogMessages.AUTH.INFO.REGISTER_SUCCESS);
      return successResponse(res, SuccessMessages.USER.REGISTER_SUCCESS);
    } catch (error) {
      return next(
        new AppError(ErrorMessages.USER.REGISTER_FAILED),
        error.message
      );
    }
  },

  login: async (req, res, next) => {
    // fetching data from body
    const { username, password } = req.body;

    try {
      // check whether user exist or not
      const user = await userService.getUserByCondition({ username });
      if (!user) {
        // logger.error(LogMessages.AUTH.ERROR.LOGIN_FAILED);
        return next(new AppError(ErrorMessages.USER.NOT_FOUND));
      }

      //   compare password
      const isMatched = await passwordComparator(password, user.password);
      if (!isMatched) {
        // logger.error(LogMessages.AUTH.ERROR.INVALID_CREDENTIALS);
        return next(new AppError(ErrorMessages.AUTH.INVALID_CREDENTIALS));
      }

      //   token generation
      const token = generateToken({ _id: user._id });

      logger.info(LogMessages.AUTH.INFO.LOGIN_SUCCESS);
      return successResponse(res, SuccessMessages.AUTH.LOGIN_SUCCESS, {
        token,
        id: user._id,
        name: user.name,
      });
    } catch (error) {
      // logger.error(
      //   `${LogMessages.AUTH.ERROR.LOGIN_FAILED} Error: ${error.message}`
      // );
      return next(new AppError(ErrorMessages.AUTH.LOGIN_FAILED, error.message));
    }
  },
};
