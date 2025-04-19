import { StatusCodes } from "http-status-codes";
export const successResponse = (
  res,
  { responseMessage, statusCode = StatusCodes.OK },
  data = []
) => {
  return res.status(statusCode).json({
    message: responseMessage,
    success: true,
    data,
  });
};
