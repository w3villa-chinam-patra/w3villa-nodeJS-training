const { ErrorMessages } = require("../constants/ErrorMessages");
const AppError = require("../error/AppError");

const routeNotFoundMiddleware = (req, res, next) => {
  next(new AppError(ErrorMessages.GENERAL.ROUTE_NOT_FOUND));
};

module.exports = routeNotFoundMiddleware;
