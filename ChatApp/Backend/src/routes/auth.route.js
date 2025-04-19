import express from "express";
import { AppRoutes } from "../constants/index.js";
import { loginHandler, registerHandler } from "../controllers/index.js";

const authRouter = express.Router();

authRouter.post(AppRoutes.REGISTER_ROUTE, registerHandler);
authRouter.post(AppRoutes.LOGIN_ROUTE, loginHandler);

export default authRouter;
