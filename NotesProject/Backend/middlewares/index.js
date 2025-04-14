module.exports = {
  authMiddleware: require("./auth.middleware"),
  globalErrorHandlerMiddleware: require("./globalErrorHandler.middleware"),
  routeNotFoundMiddleware :require("./routeNotFound.middleware"),
};
