const validationMiddleware = require("../middlewares/validation.middleware");
const { userController } = require("../controllers");
const { updateUserSchema } = require("../validations/schemas");

const userRouter = require("express").Router();

userRouter
  .route("/")
  .get(userController.fetchAllUsers)
  .put(validationMiddleware(updateUserSchema), userController.updateUser);

userRouter
  .route("/:id")
  .get(userController.fetchSingleUser)
  .delete(userController.deleteSingleUser);

module.exports = userRouter;
