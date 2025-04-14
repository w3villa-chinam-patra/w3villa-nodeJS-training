const express = require("express");
const {
  authMiddleware,
  globalErrorHandlerMiddleware,
  routeNotFoundMiddleware,
} = require("./middlewares");
const { notesRouter, authRouter, userRouter } = require("./routers");
const cors = require("cors");
const AppRoutes = require("./constants/AppRoutes");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const app = express();

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100, // limit each IP to 100 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  message: "Too many requests from this IP, please try again later.",
});

app.use(apiLimiter);
app.use(helmet());
app.use(express.json());
app.use(cors());

app.use(AppRoutes.AUTH, authRouter);
app.use(AppRoutes.NOTE, authMiddleware, notesRouter);
app.use(AppRoutes.USER, authMiddleware, userRouter);

// error handler
app.use(routeNotFoundMiddleware); // handles the route not found
app.use(globalErrorHandlerMiddleware);

module.exports = app;
