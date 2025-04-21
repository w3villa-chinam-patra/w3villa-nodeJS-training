import express from "express";
import cors from "cors";
import { initDb } from "./src/database/config.js";
import {
  createPrivateChatRoomTable,
  createUserTable,
} from "./src/models/index.js";
import { AppRoutes, SuccessMessages } from "./src/constants/index.js";
import { authRouter, userRouter } from "./src/routes/index.js";
import logger from "./src/utility/logger.js";
import { authMiddleware, globalErrorHandler } from "./src/middlewares/index.js";

const app = express();

app.use(cors());
app.use(express.json());

// initialize the SQLite database
await initDb();
logger.info(SuccessMessages.DB.INIT_SUCCESS);

// create the users table in the database if not exists
createUserTable();

// create the private chat room table
createPrivateChatRoomTable();

// route configuration
app.use(AppRoutes.AUTH_ROUTE, authRouter);
app.use(AppRoutes.USER_ROUTE, authMiddleware, userRouter);

// global error handler middleware
app.use(globalErrorHandler);

export default app;
