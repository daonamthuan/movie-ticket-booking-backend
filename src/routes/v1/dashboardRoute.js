import express from "express";
import { dashboardController } from "~/controllers/dashboardController";
import { authMiddleware } from "~/middlewares/authMiddleware";
import { movieValidation } from "~/validations/movieValidation";
import { upload, uploadMiddleware, deleteImageMiddleware } from "~/middlewares/uploadMiddleware";

const Router = express.Router();

Router.route("/access").get(authMiddleware.isAuthorized, dashboardController.access);
Router.route("/get-revenue").get(dashboardController.getRevenueLast30Days);
Router.route("/get-all-movies").get(dashboardController.getAllMoviesByStatus);
Router.route("/create-new-movie").post(
    upload.single("image"),
    uploadMiddleware,
    movieValidation.createMovie,
    dashboardController.createNewMovie
);

Router.route("/update-movie").put(
    upload.single("image"),
    uploadMiddleware,
    movieValidation.updateMovie,
    dashboardController.updateMovie
);

Router.route("/delete-movie").delete(deleteImageMiddleware, dashboardController.deleteMovie);

export const dashboardRoute = Router;
