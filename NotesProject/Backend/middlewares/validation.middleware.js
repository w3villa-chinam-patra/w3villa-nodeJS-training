const { StatusCodes } = require("http-status-codes");
const AppError = require("../error/AppError");

module.exports = validationMiddleware = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return next(
        new AppError({
          responseMessage: error.details[0].message,
          statusCode: StatusCodes.BAD_REQUEST,
        })
      );
    }
    next();
  };
};
