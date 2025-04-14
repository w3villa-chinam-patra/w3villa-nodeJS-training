const { StatusCodes } = require("http-status-codes");
const { ErrorMessages } = require("../constants/ErrorMessages");
const logger = require("../utils/logger.util");

const globalErrorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const message =
    err.responseMessage || ErrorMessages.GENERAL.INTERNAL_SERVER_ERROR.message;
  logger.error(
    `${message}${err.message ? " Error: " + err.message : ""}`
  );
  return res.status(statusCode).json({ message, status: false });
};

module.exports = globalErrorHandler;
