import express from "express";
import { userValidation } from "~/validations/userValidation";
import { userController } from "~/controllers/userController";

const Router = express.Router();

Router.route("/create").post(userValidation.createNewUser, userController.createNewUser);

Router.route("/login").post(userController.login);

Router.route("/logout").delete(userController.logout);

Router.route("/refresh-token").put(userController.refreshToken);

export const userRoute = Router;
