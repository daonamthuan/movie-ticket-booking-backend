import express from "express";
import { dashboardController } from "~/controllers/dashboardController";
import { authMiddleware } from "~/middlewares/authMiddleware";
import { movieValidation } from "~/validations/movieValidation";
import { foodValidation } from "~/validations/foodValidation";
import { cinemaValidation } from "~/validations/cinemaValidation";
import { roomValidation } from "~/validations/roomValidation";
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
Router.route("/get-movie-by-id/:movieId").get(dashboardController.getMovieById);
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

// Rooms
Router.route("/get-cinema-info-by-id/:cinemaId").get(dashboardController.getCinemaInfoById);
Router.route("/get-all-rooms-by-cinema-id").get(dashboardController.getAllRoomByCinemaId);
Router.route("/get-room-by-id/:roomId").get(dashboardController.getRoomById);
Router.route("/create-new-room").post(roomValidation.createRoom, dashboardController.createNewRoom);
Router.route("/update-room").put(roomValidation.updateRoom, dashboardController.updateRoom);
Router.route("/delete-room/:roomId").delete(dashboardController.deleteRoom);

// Schedule
Router.route("/get-all-schedules").get(dashboardController.getAllSchedules);
Router.route("/get-schedule-by-id/:scheduleId").get(dashboardController.getScheduleById);
Router.route("/get-next-three-days-schedule").get(dashboardController.getNextThreeDaysSchedule);
Router.route("/create-new-schedule").post(dashboardController.createNewSchedule);
Router.route("/update-schedule").put(dashboardController.updateSchedule);
Router.route("/delete-schedule/:scheduleId").delete(dashboardController.deleteSchedule);

// Voucher
Router.route("/get-voucher").get(dashboardController.getVoucher);

// Payment
Router.route("/create-payment-link").post(dashboardController.createPaymentLink);
Router.route("/update-payment-success").put(dashboardController.updatePaymentSuccess);
Router.route("/update-payment-cancelled").put(dashboardController.updatePaymentCancelled);

// Booking
Router.route("/get-all-booking-by-user-id").get(dashboardController.getAllBookingByUserId);
Router.route("/create-new-booking-id").post(dashboardController.createNewBookingId);
Router.route("/update-booking").put(dashboardController.updateBooking);

// Seat_Booking
Router.route("/get-all-booked-seats").get(dashboardController.getAllBookedSeats);

export const dashboardRoute = Router;
