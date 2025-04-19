export const errorResponse = (res, responseMessage, statusCode) => {
  return res.status(statusCode).json({
    message: responseMessage,
    success: false,
  });
};
