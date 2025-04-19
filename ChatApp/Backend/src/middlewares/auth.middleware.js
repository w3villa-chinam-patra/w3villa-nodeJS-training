import { ErrorMessages } from "../constants/index.js";
import AppError from "../errors/AppError.js";
import { verifyToken } from "../helpers/index.js";
import { getUserById } from "../services/user.service.js";

export const authMiddleware = async (req, res, next) => {
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
    const userId = verifyToken(token);

    // check if the user exists or not
    const response = await getUserById(userId);
    if (!response) return next(new AppError(ErrorMessages.USER.NOT_FOUND));

    // set the payload in the request
    req.userId = userId;

    next();
  } catch (error) {
    return next(
      new AppError(ErrorMessages.GENERAL.UNAUTHORIZE_ACCESS, error.message)
    );
  }
};
