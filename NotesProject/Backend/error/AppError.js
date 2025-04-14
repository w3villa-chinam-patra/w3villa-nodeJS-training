class AppError extends Error {
  constructor({ responseMessage, statusCode }, errorMessage) {
    super(errorMessage);
    this.responseMessage = responseMessage;
    this.statusCode = statusCode;
  }
}

module.exports = AppError;
