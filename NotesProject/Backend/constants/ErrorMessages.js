const { StatusCodes } = require("http-status-codes");

exports.ErrorMessages = {
  GENERAL: {
    INTERNAL_SERVER_ERROR: {
      responseMessage: "Something went wrong on the server",
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

  NOTE: {
    CREATE_FAILED: {
      responseMessage: "Failed to create note",
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    },
    FETCH_ALL_FAILED: {
      responseMessage: "Failed to fetch notes",
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    },
    FETCH_FAILED: {
      responseMessage: "Failed to fetch a note",
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    },
    UPDATE_FAILED: {
      responseMessage: "Failed to update note",
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    },
    DELETE_FAILED: {
      responseMessage: "Failed to delete note",
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    },
    NOT_FOUND: {
      responseMessage: "Note not found",
      statusCode: StatusCodes.NOT_FOUND,
    },
  },

  USER: {
    REGISTER_FAILED: {
      responseMessage: "User registration failed",
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    },
    ALREADY_EXISTS: {
      responseMessage: "User already exists",
      statusCode: StatusCodes.CONFLICT,
    },
    NOT_FOUND: {
      responseMessage: "User does not exist",
      statusCode: StatusCodes.NOT_FOUND,
    },
    FETCH_FAILED: {
      responseMessage: "Failed to fetch user",
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    },
    FETCH_ALL_FAILED: {
      responseMessage: "Failed to fetch users",
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    },
    DELETE_FAILED: {
      responseMessage: "Failed to delete user",
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    },
    UPDATE_FAILED: {
      responseMessage: "Failed to update user",
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    },
  },

  AUTH: {
    LOGIN_FAILED: {
      responseMessage: "Failed to login",
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    },
    INVALID_CREDENTIALS: {
      responseMessage: "Credentials are not valid",
      statusCode: StatusCodes.UNAUTHORIZED,
    },
  },
};
