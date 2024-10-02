import express from "express";
import { dashboardController } from "~/controllers/dashboardController";
import { authMiddleware } from "~/middlewares/authMiddleware";
import { movieValidation } from "~/validations/movieValidation";
import { foodValidation } from "~/validations/foodValidation";
import {
    uploadImageMiddleware,
    updateImageMiddleware,
    deleteImageMiddleware,
} from "~/middlewares/imageMiddleware";

const Router = express.Router();

Router.route("/access").get(authMiddleware.isAuthorized, dashboardController.access);
Router.route("/get-revenue").get(dashboardController.getRevenueLast30Days);

// movies
Router.route("/get-all-movies").get(dashboardController.getAllMoviesByStatus);
Router.route("/create-new-movie").post(
    uploadImageMiddleware,
    movieValidation.createMovie,
    dashboardController.createNewMovie
);
Router.route("/update-movie").put(
    updateImageMiddleware,
    movieValidation.updateMovie,
    dashboardController.updateMovie
);
Router.route("/delete-movie").delete(deleteImageMiddleware, dashboardController.deleteMovie);

// foods
Router.route("/get-all-foods").get(dashboardController.getAllFoods);
Router.route("/create-new-food").post(
    uploadImageMiddleware,
    foodValidation.createFood,
    dashboardController.createNewFood
);
Router.route("/update-food").put(
    updateImageMiddleware,
    foodValidation.updateFood,
    dashboardController.updateFood
);
Router.route("/delete-food").delete(deleteImageMiddleware, dashboardController.deleteFood);

export const dashboardRoute = Router;
