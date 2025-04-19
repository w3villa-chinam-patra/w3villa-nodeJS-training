import { StatusCodes } from "http-status-codes";

export const SuccessMessages = {
  DB: {
    INIT_SUCCESS: "Database initialized successfully!",
  },
  SOCKET: {
    CONNECTED: "A new Socket is connected with id: ",
  },
  AUTH: {
    REGISTER_SUCCESS: {
      responseMessage: "Register Successfully!",
      statusCode: StatusCodes.CREATED,
    },
    LOGIN_SUCCESS: {
      responseMessage: "Logged In Successfully!",
      statusCode: StatusCodes.OK,
    },
  },
  USER: {
    FETCH_ALL_SUCCESS: {
      responseMessage: "All users fetched successfully!",
      statusCode: StatusCodes.OK,
    },
    FETCH_SUCCESS: {
      responseMessage: "User fetched successfully!",
      statusCode: StatusCodes.OK,
    },
  },
};
