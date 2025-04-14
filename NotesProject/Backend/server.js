require("dotenv").config();
const app = require("./app");
const { connectDB } = require("./database/dbConfig");
const logger = require("./utils/logger.util");

const PORT = process.env.PORT || 4000;

connectDB(process.env.MONGO_URI);

app.listen(PORT, () =>
  logger.info(`Server Started at: http://localhost:${PORT}`)
);
