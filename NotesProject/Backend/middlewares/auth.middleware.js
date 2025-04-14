const { verifyToken } = require("../helpers/jwt.helper");
const { ErrorMessages } = require("../constants/ErrorMessages");
const { userService } = require("../services");
const AppError = require("../error/AppError");

const authMiddleware = async (req, res, next) => {
  // get the authorization header from the request
  const authHeader = req.headers["authorization"];

  // check if the authorization header is present or not
  if (!authHeader)
    return next(new AppError(ErrorMessages.GENERAL.MISSING_AUTH_HEADER));

  // extract the token from the header
  const token = authHeader.split("Bearer ")[1];

  // check if the token is present or not
  if (!token) return next(new AppError(ErrorMessages.GENERAL.MISSING_TOKEN));

  try {
    // verify the token and get the payload
    const payload = verifyToken(token);

    const userId = payload._id;

    // check if the user exists or not
    console.log(userId);
    const response = await userService.getUserByCondition({ _id: userId });
    if (!response) return next(new AppError(ErrorMessages.USER.NOT_FOUND));

    // set the payload in the request
    req.userId = payload._id;

    next();
  } catch (error) {
    console.dir(error.message);
    return next(
      new AppError(ErrorMessages.GENERAL.UNAUTHORIZE_ACCESS, error.message)
    );
  }
};

module.exports = authMiddleware;
