const authRouter = require("express").Router();
const AppRoutes = require("../constants/AppRoutes");
const { authController } = require("../controllers");
const validationMiddleware = require("../middlewares/validation.middleware");
const { registerSchema, loginSchema } = require("../validations/schemas");

authRouter.post(
  AppRoutes.AUTH_REGISTER,
  validationMiddleware(registerSchema),
  authController.register
);

authRouter.post(
  AppRoutes.AUTH_LOGIN, 
  validationMiddleware(loginSchema),
  authController.login
);

module.exports = authRouter;
