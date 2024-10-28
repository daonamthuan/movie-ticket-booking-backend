import { dashboardService } from "~/services/dashboardService";
import { StatusCodes } from "http-status-codes";
import { or } from "sequelize";
import PayOS from "@payos/node";
import { env } from "~/config/environment";

const payos = new PayOS(env.CLIENT_ID, env.API_KEY, env.CHECKSUM_KEY);

const access = async (req, res, next) => {
    try {
        const userInfo = {
            id: req.jwtDecoded.id,
            email: req.jwtDecoded.email,
        };

        res.status(StatusCodes.OK).json(userInfo);
    } catch (err) {
        console.log(err);
        next(err);
    }
};

const getRevenueLast30Days = async (req, res, next) => {
    try {
        let data = await dashboardService.getRevenueLast30Days();
        // res.
    } catch (err) {
        console.log(err);
        next(err);
    }
};

// Movie
const getAllMoviesByStatus = async (req, res, next) => {
    try {
        let status = req.query.status;
        let movies = await dashboardService.getAllMoviesByStatus(status);
        res.status(StatusCodes.OK).json(movies);
    } catch (err) {
        console.log(err);
        next(err);
    }
};

const createNewMovie = async (req, res, next) => {
    try {
        let movieData = req.body;
        let response = await dashboardService.createNewMovie(movieData);
        res.status(StatusCodes.CREATED).json(response);
    } catch (err) {
        console.log(err);
        next(err);
    }
};

const getMovieById = async (req, res, next) => {
    try {
        let movieId = req.params.movieId;
        let response = await dashboardService.getMovieById(movieId);
        res.status(StatusCodes.CREATED).json(response);
    } catch (err) {
        console.log(err);
        next(err);
    }
};

const updateMovie = async (req, res, next) => {
    try {
        let movieData = req.body;
        let response = await dashboardService.updateMovie(movieData);
        res.status(StatusCodes.OK).json(response);
    } catch (err) {
        console.log(err);
        next(err);
    }
};

const deleteMovie = async (req, res, next) => {
    try {
        let response = await dashboardService.deleteMovie(req.query.movieId);
        res.status(StatusCodes.OK).json(response);
    } catch (err) {
        console.log(err);
        next(err);
    }
};

// Food
const getAllFoods = async (req, res, next) => {
    try {
        let foods = await dashboardService.getAllFoods();
        res.status(StatusCodes.OK).json(foods);
    } catch (err) {
        console.log(err);
        next(err);
    }
};

const createNewFood = async (req, res, next) => {
    try {
        let foodData = req.body;
        let response = await dashboardService.createNewFood(foodData);
        res.status(StatusCodes.CREATED).json(response);
    } catch (err) {
        console.log(err);
        next(err);
    }
};

const updateFood = async (req, res, next) => {
    try {
        let foodData = req.body;
        let response = await dashboardService.updateFood(foodData);
        res.status(StatusCodes.OK).json(response);
    } catch (err) {
        console.log(err);
        next(err);
    }
};

const deleteFood = async (req, res, next) => {
    try {
        let response = await dashboardService.deleteFood(req.query.foodId);
        res.status(StatusCodes.OK).json(response);
    } catch (err) {
        console.log(err);
        next(err);
    }
};

// Cinema
const getAllCinemas = async (req, res, next) => {
    try {
        let cinemas = await dashboardService.getAllCinemas();
        res.status(StatusCodes.OK).json(cinemas);
    } catch (err) {
        console.log(err);
        next(err);
    }
};

const createNewCinema = async (req, res, next) => {
    try {
        let cinemaData = req.body;
        let response = await dashboardService.createNewCinema(cinemaData);
        res.status(StatusCodes.CREATED).json(response);
    } catch (err) {
        console.log(err);
        next(err);
    }
};

const updateCinema = async (req, res, next) => {
    try {
        let cinemaData = req.body;
        let response = await dashboardService.updateCinema(cinemaData);
        res.status(StatusCodes.OK).json(response);
    } catch (err) {
        console.log(err);
        next(err);
    }
};

const deleteCinema = async (req, res, next) => {
    try {
        let response = await dashboardService.deleteCinema(req.query.cinemaId);
        res.status(StatusCodes.OK).json(response);
    } catch (err) {
        console.log(err);
        next(err);
    }
};

// Rooms
const getCinemaInfoById = async (req, res, next) => {
    try {
        let cinema = await dashboardService.getCinemaInfoById(req.params.cinemaId);
        res.status(StatusCodes.OK).json(cinema);
    } catch (err) {
        console.log(err);
        next(err);
    }
};

const getAllRoomByCinemaId = async (req, res, next) => {
    try {
        let rooms = await dashboardService.getAllRoomByCinemaId(req.query.cinemaId);
        res.status(StatusCodes.OK).json(rooms);
    } catch (err) {
        console.log(err);
        next(err);
    }
};

const getRoomById = async (req, res, next) => {
    try {
        let room = await dashboardService.getRoomById(req.params.roomId);
        res.status(StatusCodes.OK).json(room);
    } catch (err) {
        console.log(err);
        next(err);
    }
};

const createNewRoom = async (req, res, next) => {
    try {
        let roomData = req.body;
        let response = await dashboardService.createNewRoom(roomData);
        res.status(StatusCodes.CREATED).json(response);
    } catch (err) {
        console.log(err);
        next(err);
    }
};

const updateRoom = async (req, res, next) => {
    try {
        let roomData = req.body;
        let response = await dashboardService.updateRoom(roomData);
        res.status(StatusCodes.OK).json(response);
    } catch (err) {
        console.log(err);
        next(err);
    }
};

const deleteRoom = async (req, res, next) => {
    try {
        let response = await dashboardService.deleteRoom(req.params.roomId);
        res.status(StatusCodes.OK).json(response);
    } catch (err) {
        console.log(err);
        next(err);
    }
};

// Schedule
const getAllSchedules = async (req, res, next) => {
    try {
        let cinemas = await dashboardService.getAllSchedules();
        res.status(StatusCodes.OK).json(cinemas);
    } catch (err) {
        console.log(err);
        next(err);
    }
};

const getScheduleById = async (req, res, next) => {
    try {
        let schedule = await dashboardService.getScheduleById(req.params.scheduleId);
        res.status(StatusCodes.OK).json(schedule);
    } catch (err) {
        console.log(err);
        next(err);
    }
};

const getNextThreeDaysSchedule = async (req, res, next) => {
    try {
        let schedules = await dashboardService.getNextThreeDaysSchedule(req.query.movieId);
        res.status(StatusCodes.OK).json(schedules);
    } catch (err) {
        console.log(err);
        next(err);
    }
};

const createNewSchedule = async (req, res, next) => {
    try {
        let scheduleData = req.body;
        let response = await dashboardService.createNewSchedule(scheduleData);
        res.status(StatusCodes.CREATED).json(response);
    } catch (err) {
        console.log(err);
        next(err);
    }
};

const updateSchedule = async (req, res, next) => {
    try {
        let scheduleData = req.body;
        let response = await dashboardService.updateSchedule(scheduleData);
        res.status(StatusCodes.OK).json(response);
    } catch (err) {
        console.log(err);
        next(err);
    }
};

const deleteSchedule = async (req, res, next) => {
    try {
        let response = await dashboardService.deleteSchedule(req.params.scheduleId);
        res.status(StatusCodes.OK).json(response);
    } catch (err) {
        console.log(err);
        next(err);
    }
};

// Voucher
const getAllVouchers = async (req, res, next) => {
    try {
        let vouchers = await dashboardService.getAllVouchers();
        res.status(StatusCodes.OK).json(vouchers);
    } catch (err) {
        console.log(err);
        next(err);
    }
};

const getVoucherByCode = async (req, res, next) => {
    try {
        let voucher = await dashboardService.getVoucherByCode(req.query.voucherCode);
        res.status(StatusCodes.OK).json(voucher);
    } catch (err) {
        console.log(err);
        next(err);
    }
};

const createNewVoucher = async (req, res, next) => {
    try {
        let response = await dashboardService.createNewVoucher(req.body);
        res.status(StatusCodes.OK).json(response);
    } catch (err) {
        console.log(err);
        next(err);
    }
};

const updateVoucher = async (req, res, next) => {
    try {
        let response = await dashboardService.updateVoucher(req.body);
        res.status(StatusCodes.OK).json(response);
    } catch (err) {
        console.log(err);
        next(err);
    }
};

const deleteVoucher = async (req, res, next) => {
    try {
        let response = await dashboardService.deleteVoucher(req.query.voucherId);
        res.status(StatusCodes.OK).json(response);
    } catch (err) {
        console.log(err);
        next(err);
    }
};

// Payment
const createPaymentLink = async (req, res, next) => {
    try {
        let bookingId = await dashboardService.createNewBookingId();
        const orderTemp = {
            orderCode: bookingId,
            amount: 2000,
            description: "Thanh toan ve xem phim",
            returnUrl: `http://localhost:5173/payment-success`,
            cancelUrl: `http://localhost:5173/payment-cancel`,
            expiredAt: Math.floor(Date.now() / 1000) + 60 * 10,
        };

        const paymentLink = await payos.createPaymentLink(orderTemp);
        res.status(StatusCodes.OK).json({
            url: paymentLink.checkoutUrl,
            orderCode: paymentLink.orderCode,
        });
    } catch (err) {
        console.log(err);
        next(err);
    }
};

const updatePaymentSuccess = async (req, res, next) => {
    try {
        let response = await dashboardService.updatePaymentSuccess(req.query.bookingId);
        res.status(StatusCodes.OK).json({ message: "update paid booking successfully" });
    } catch (err) {
        console.log(err);
        next(err);
    }
};

const updatePaymentCancelled = async (req, res, next) => {
    try {
        let response = await dashboardService.updatePaymentCancelled(req.query.bookingId);
        res.status(StatusCodes.OK).json({ message: "update cancelled booking successfully" });
    } catch (err) {
        console.log(err);
        next(err);
    }
};

// Booking
const getAllBookingByUserId = async (req, res, next) => {
    try {
        let bookings = await dashboardService.getAllBookingByUserId(req.query.userId);
        res.status(StatusCodes.OK).json(bookings);
    } catch (err) {
        console.log(err);
        next(err);
    }
};

const createNewBookingId = async (req, res, next) => {
    try {
        let bookingId = await dashboardService.createNewBookingId();
        res.status(StatusCodes.OK).json({ bookingId: bookingId });
    } catch (err) {
        console.log(err);
        next(err);
    }
};

const updateBooking = async (req, res, next) => {
    try {
        let data = req.body;
        let response = await dashboardService.updateBooking(data.bookingData);

        let seatBookingsResponse = await dashboardService.createSeatBookings(
            data.bookingId,
            data.selectedSeats
        );
        let foodBookingsResponse = await dashboardService.createFoodBookings(
            data.bookingId,
            data.selectedFoods
        );

        res.status(StatusCodes.OK).json({
            message: "Create new booking with seats and foods successfully",
        });
    } catch (err) {
        console.log(err);
        next(err);
    }
};

// Seat_Booking
const getAllBookedSeats = async (req, res, next) => {
    try {
        let bookedSeats = await dashboardService.getAllBookedSeats(req.query.scheduleId);
        res.status(StatusCodes.OK).json(bookedSeats);
    } catch (err) {
        console.log(err);
        next(err);
    }
};

// Overview
const getOverviewData = async (req, res, next) => {
    try {
        let data = await dashboardService.getOverviewData();
        res.status(StatusCodes.OK).json(data);
    } catch (err) {
        console.log(err);
        next(err);
    }
};

export const dashboardController = {
    access,
    getRevenueLast30Days,

    // movie
    getAllMoviesByStatus,
    getMovieById,
    createNewMovie,
    updateMovie,
    deleteMovie,

    // food
    getAllFoods,
    createNewFood,
    updateFood,
    deleteFood,

    // cinema
    getAllCinemas,
    createNewCinema,
    updateCinema,
    deleteCinema,

    // room
    getCinemaInfoById,
    getAllRoomByCinemaId,
    getRoomById,
    createNewRoom,
    updateRoom,
    deleteRoom,

    // schedule
    getAllSchedules,
    getScheduleById,
    getNextThreeDaysSchedule,
    createNewSchedule,
    updateSchedule,
    deleteSchedule,

    // Voucher
    getAllVouchers,
    getVoucherByCode,
    createNewVoucher,
    updateVoucher,
    deleteVoucher,

    // Payment
    createPaymentLink,
    updatePaymentSuccess,
    updatePaymentCancelled,

    // Booking
    getAllBookingByUserId,
    createNewBookingId,
    updateBooking,

    // Seat_Booking
    getAllBookedSeats,

    // Overview
    getOverviewData,
};
