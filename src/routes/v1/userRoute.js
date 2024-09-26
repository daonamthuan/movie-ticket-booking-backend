import express from "express";
import { userValidation } from "~/validations/userValidation";
import { userController } from "~/controllers/userController";
import { upload } from "~/middlewares/uploadMiddleware";

const Router = express.Router();

Router.route("/login").post(userController.login);
Router.route("/logout").delete(userController.logout);
Router.route("/refresh-token").put(userController.refreshToken);
Router.route("/get-all-users").get(userController.getAllUsers);
Router.route("/create-new-user").post(
    upload.single("image"),
    userValidation.createNewUser,
    userController.createNewUser
);
Router.route("/update-user").post(
    upload.single("image"),
    userValidation.updateUser,
    userController.updateUser
);
Router.route("/delete-user/:id").delete(userController.deleteUser);

Router.route("/get-all-genders").get(userController.getAllGenders);
Router.route("/get-all-roles").get(userController.getAllRoles);
Router.route("/get-all-memberships").get(userController.getAllMemberships);

export const userRoute = Router;
