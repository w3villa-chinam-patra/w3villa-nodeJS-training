import express from "express";
import { fetchAllUsersHandler, fetchUserById } from "../controllers/index.js";

const userRouter = express.Router();

userRouter.get("/", fetchAllUsersHandler);
userRouter.get("/:id", fetchUserById);

export default userRouter;
