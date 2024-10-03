import express from "express";
import { dashboardController } from "~/controllers/dashboardController";
import { authMiddleware } from "~/middlewares/authMiddleware";
import { movieValidation } from "~/validations/movieValidation";
import { foodValidation } from "~/validations/foodValidation";
import { cinemaValidation } from "~/validations/cinemaValidation";
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

// cinemas
Router.route("/get-all-cinemas").get(dashboardController.getAllCinemas);
Router.route("/create-new-cinema").post(
    uploadImageMiddleware,
    cinemaValidation.createCinema,
    dashboardController.createNewCinema
);
Router.route("/update-cinema").put(
    updateImageMiddleware,
    cinemaValidation.updateCinema,
    dashboardController.updateCinema
);
Router.route("/delete-cinema").delete(deleteImageMiddleware, dashboardController.deleteCinema);

export const dashboardRoute = Router;
