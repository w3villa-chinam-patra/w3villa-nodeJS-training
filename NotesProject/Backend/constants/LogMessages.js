const LogMessages = {
  NOTE: {
    INFO: {
      CREATE_SUCCESS: "Note created successfully",
      FETCH_ALL_SUCCESS: "All notes fetched successfully",
      FETCH_SUCCESS: "Note fetched successfully",
      UPDATE_SUCCESS: "Note updated successfully",
      DELETE_SUCCESS: "Note deleted successfully",
    },
    ERROR: {
      CREATE_FAILED: "Failed to create note",
      FETCH_ALL_FAILED: "Failed to fetch notes",
      FETCH_FAILED: "Failed to fetch note",
      UPDATE_FAILED: "Failed to update note",
      DELETE_FAILED: "Failed to delete note",
    },
  },

  USER: {
    INFO: {
      FETCH_ALL_SUCCESS: "All users fetched successfully",
      FETCH_SUCCESS: "User fetched successfully",
      DELETE_SUCCESS: "User deleted successfully",
      UPDATE_SUCCESS: "User updated successfully",
    },
    ERROR: {
      FETCH_ALL_FAILED: "Failed to fetch all users",
      FETCH_FAILED: "Failed to fetch the user",
      DELETE_FAILED: "Failed to delete the user",
      UPDATE_FAILED: "Failed to update user",
    },
  },

  AUTH: {
    INFO: {
      LOGIN_SUCCESS: "User logged in successfully",
      REGISTER_SUCCESS: "User registered successfully",
    },
    ERROR: {
      LOGIN_FAILED: "User login failed",
      REGISTER_FAILED: "User registration failed",
      INVALID_CREDENTIALS: "Credentials are not valid",
    },
  },

  DB: {
    INFO: {
      CONNECTED: "Database connected successfully",
    },
    ERROR: {
      NOT_CONNECTED: "Database did not connect",
      DISCONNECTED: "Database disconnected",
      DISCONNECT_FAILED: "Failed to disconnect the database",
    },
  },
};

module.exports = LogMessages;
