const { StatusCodes } = require("http-status-codes");

module.exports = {
  // global success response handler
  successResponse: (
    res,
    { responseMessage = "SUCCESS", statusCode = StatusCodes.OK },
    data = []
  ) => {
    return res
      .status(statusCode)
      .json({ message: responseMessage, success: true, data });
  },

  // global error response handler
  // errorResponse: (
  //   res,
  //   message = "ERROR",
  //   statusCode = StatusCodes.INTERNAL_SERVER_ERROR
  // ) => {
  //   return res.status(statusCode).json({ message, success: false });
  // },
};
