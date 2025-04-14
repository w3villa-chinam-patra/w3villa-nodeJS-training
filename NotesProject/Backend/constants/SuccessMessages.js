const { StatusCodes } = require("http-status-codes");

exports.SuccessMessages = {
  NOTE: {
    CREATE_SUCCESS: {
      responseMessage: "Note created successfully",
      statusCode: StatusCodes.CREATED,
    },
    FETCH_ALL_SUCCESS: {
      responseMessage: "All notes fetched successfully",
      statusCode: StatusCodes.OK,
    },
    FETCH_SUCCESS: {
      responseMessage: "Note fetched successfully",
      statusCode: StatusCodes.OK,
    },
    UPDATE_SUCCESS: {
      responseMessage: "Note updated successfully",
      statusCode: StatusCodes.OK,
    },
    DELETE_SUCCESS: {
      responseMessage: "Note deleted successfully",
      statusCode: StatusCodes.OK,
    },
  },

  USER: {
    REGISTER_SUCCESS: {
      responseMessage: "User registered successfully",
      statusCode: StatusCodes.CREATED,
    },
    FETCH_ALL_SUCCESS: {
      responseMessage: "All users fetched successfully",
      statusCode: StatusCodes.OK,
    },
    FETCH_SUCCESS: {
      responseMessage: "User fetched successfully",
      statusCode: StatusCodes.OK,
    },
    UPDATE_SUCCESS: {
      responseMessage: "User updated successfully",
      statusCode: StatusCodes.OK,
    },
    DELETE_SUCCESS: {
      responseMessage: "User deleted successfully",
      statusCode: StatusCodes.OK,
    },
  },

  AUTH: {
    LOGIN_SUCCESS: {
      responseMessage: "Logged in successfully",
      statusCode: StatusCodes.OK,
    },
  },
};
