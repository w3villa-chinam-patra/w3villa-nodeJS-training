const mongoose = require("mongoose");
const LogMessages = require("../constants/LogMessages");
const logger = require("../utils/logger.util");

const connectDB = async (DB_URI) => {
  try {
    console.log(DB_URI)
    await mongoose.connect(DB_URI);
    logger.info(LogMessages.DB.INFO.CONNECTED);
  } catch (error) {
    logger.error(
      `${LogMessages.DB.ERROR.NOT_CONNECTED} Error: ${error.message}`
    );
  }
};

const disconnectDB = async () => {
  try {
    await mongoose.connection.close();
  } catch (error) {
    logger.error(
      `${LogMessages.DB.ERROR.DISCONNECT_FAILED} Error: ${error.message}`
    );
  }
};

module.exports = { connectDB, disconnectDB };

// const dbUri = () => {
//   let dbUri;
//   return {
//     setDbUri: (url) => {
//       dbUri = url;
//     },
//     getDbUri: () => dbUri,
//   };
// };

// const { setDbUri, getDbUri } = dbUri();
// setDbUri(process.env.DB_URI);

// module.exports = { getDbUri };
