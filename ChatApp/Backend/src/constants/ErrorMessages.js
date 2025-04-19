import { StatusCodes } from "http-status-codes";

export const ErrorMessages = {
  GENERAL: {
    INTERNAL_SERVER_ERROR: {
      responseMessage: "Something wrong happened at server",
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    },
    MISSING_AUTH_HEADER: {
      responseMessage: "Authorization header is missing",
      statusCode: StatusCodes.UNAUTHORIZED,
    },
    MISSING_TOKEN: {
      responseMessage: "Token is missing in Authorization header",
      statusCode: StatusCodes.UNAUTHORIZED,
    },
    UNAUTHORIZE_ACCESS: {
      responseMessage: "Unauthorized access",
      statusCode: StatusCodes.UNAUTHORIZED,
    },
    ROUTE_NOT_FOUND: {
      responseMessage: "Route not found",
      statusCode: StatusCodes.NOT_FOUND,
    },
  },

  AUTH: {
    REGISTER_FAILED: {
      responseMessage: "Failed to register",
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    },
    LOGIN_FAILED: {
      responseMessage: "Failed to login",
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    },
    INVALID_CREDENTIALS: {
      responseMessage: "Credentials are not valid",
      statusCode: StatusCodes.UNAUTHORIZED,
    },
  },

  USER: {
    ALREADY_EXIST: {
      responseMessage: "User already exists!",
      statusCode: StatusCodes.CONFLICT,
    },
    NOT_FOUND: {
      responseMessage: "User Not Found!",
      statusCode: StatusCodes.NOT_FOUND,
    },
    FETCH_ALL_FAILED: {
      responseMessage: "Failed to fetch all users",
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    },
    FETCH_FAILED: {
      responseMessage: "Failed to fetch user",
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    },
  },
};
