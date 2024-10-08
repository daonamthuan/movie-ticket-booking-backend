import express from "express";
import { userValidation } from "~/validations/userValidation";
import { userController } from "~/controllers/userController";
import {
    uploadImageMiddleware,
    updateImageMiddleware,
    deleteImageMiddleware,
} from "~/middlewares/imageMiddleware";

const Router = express.Router();

Router.route("/login").post(userController.login);
Router.route("/logout").delete(userController.logout);
Router.route("/refresh-token").put(userController.refreshToken);
Router.route("/get-all-users").get(userController.getAllUsers);
Router.route("/create-new-user").post(
    uploadImageMiddleware,
    userValidation.createNewUser,
    userController.createNewUser
);
Router.route("/update-user").put(
    updateImageMiddleware,
    userValidation.updateUser,
    userController.updateUser
);
Router.route("/delete-user").delete(deleteImageMiddleware, userController.deleteUser);

Router.route("/get-all-genders").get(userController.getAllGenders);
Router.route("/get-all-roles").get(userController.getAllRoles);
Router.route("/get-all-memberships").get(userController.getAllMemberships);
Router.route("/get-age-limits").get(userController.getAgeLimits);

export const userRoute = Router;
