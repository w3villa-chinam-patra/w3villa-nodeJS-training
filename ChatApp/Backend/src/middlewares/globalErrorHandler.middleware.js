import { errorResponse } from "../handlers/index.js";
import { ErrorMessages } from "../constants/index.js";
import { logger } from "../utility/index.js";

export const globalErrorHandler = (appError, req, res, next) => {
  const responseMessage =
    appError.responseMessage ||
    ErrorMessages.GENERAL.INTERNAL_SERVER_ERROR.responseMessage;
  const statusCode =
    appError.statusCode ||
    ErrorMessages.GENERAL.INTERNAL_SERVER_ERROR.statusCode;

  // log the error messages
  logger.error(
    `${responseMessage}${appError.message ? " | " + appError.message : ""}`
  );

  return errorResponse(res, responseMessage, statusCode);
};
