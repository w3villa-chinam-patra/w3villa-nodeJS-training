import { StatusCodes } from "http-status-codes";
import { ErrorMessages } from "../constants/index.js";

class AppError extends Error {
  constructor(
    {
      responseMessage = ErrorMessages.GENERAL.INTERNAL_SERVER_ERROR,
      statusCode = StatusCodes.INTERNAL_SERVER_ERROR,
    },
    errorMessage
  ) {
    super(errorMessage);
    this.responseMessage = responseMessage;
    this.statusCode = statusCode;
  }
}

export default AppError;
