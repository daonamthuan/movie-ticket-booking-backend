import db from "~/models";
import ApiError from "~/utils/ApiError";
import { StatusCodes } from "http-status-codes";
import { Op, fn, col, literal } from "sequelize";
import dayjs from "dayjs";
import booking from "~/models/booking";

let getRevenueLast30Days = async (userId) => {
    try {
    } catch (err) {
        console.log(err);
        throw err;
    }
};

// Movie
let getAllMoviesByStatus = async (status) => {
    try {
        let movies = [];
        if (status === "all") {
            movies = await db.Movie.findAll({
                attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
            });
        } else {
            movies = await db.Movie.findAll({
                where: { status: status },
                attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
            });
        }

        return movies;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

let getMovieById = async (movieId) => {
    try {
        let movie = await db.Movie.findOne({
            where: { id: movieId },
            attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
        });
        return movie;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

let createNewMovie = async (movieData) => {
    try {
        let movie = await db.Movie.create(movieData);
        return { message: "Create movie successfully!" };
    } catch (err) {
        console.log(err);
        throw err;
    }
};

let updateMovie = async (movieData) => {
    try {
        let movie = await db.Movie.findOne({
            where: { id: movieData.id },
        });

        if (!movie) {
            throw new ApiError(StatusCodes.BAD_GATEWAY, "Movie need to delete not found");
        }

        await db.Movie.update(movieData, {
            where: { id: movieData.id },
        });

        return { message: "Update movie successfully!" };
    } catch (err) {
        console.log(err);
        throw err;
    }
};

let deleteMovie = async (movieId) => {
    try {
        let movie = await db.Movie.findOne({
            where: { id: movieId },
        });

        if (!movie)
            throw new ApiError(
                StatusCodes.BAD_REQUEST,
                "Delete failed because movie is not exist!"
            );
        await db.Movie.destroy({
            where: { id: movieId },
        });
        return { message: "Delete movie successfully!" };
    } catch (err) {
        console.log(err);
        throw err;
    }
};

// Food
let getAllFoods = async () => {
    try {
        let foods = await db.Food_Menu.findAll({
            attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
        });
        return foods;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

let createNewFood = async (foodData) => {
    try {
        let food = await db.Food_Menu.create(foodData);
        return { message: "Create food successfully!" };
    } catch (err) {
        console.log(err);
        throw err;
    }
};

let updateFood = async (foodData) => {
    try {
        let food = await db.Food_Menu.findOne({
            where: { id: foodData.id },
        });

        if (!food) {
            throw new ApiError(StatusCodes.BAD_GATEWAY, "Food need to delete not found");
        }

        await db.Food_Menu.update(foodData, {
            where: { id: foodData.id },
        });

        return { message: "Update food successfully!" };
    } catch (err) {
        console.log(err);
        throw err;
    }
};

let deleteFood = async (foodId) => {
    try {
        let food = await db.Food_Menu.findOne({
            where: { id: foodId },
        });

        if (!food)
            throw new ApiError(StatusCodes.BAD_REQUEST, "Delete failed because food is not exist!");
        await db.Food_Menu.destroy({
            where: { id: foodId },
        });
        return { message: "Delete food successfully!" };
    } catch (err) {
        throw err;
    }
};

// Cinema
let getAllCinemas = async () => {
    try {
        let cinemas = await db.Cinema.findAll({
            attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
            include: [
                {
                    model: db.Room,
                    as: "rooms",
                    attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
                },
            ],
        });
        return cinemas;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

let createNewCinema = async (cinemaData) => {
    try {
        let cinema = await db.Cinema.create(cinemaData);
        return { message: "Create cinema successfully!" };
    } catch (err) {
        console.log(err);
        throw err;
    }
};

let updateCinema = async (cinemaData) => {
    try {
        let cinema = await db.Cinema.findOne({
            where: { id: cinemaData.id },
        });

        if (!cinema) {
            throw new ApiError(StatusCodes.BAD_GATEWAY, "cinema need to delete not found");
        }

        await db.Cinema.update(cinemaData, {
            where: { id: cinemaData.id },
        });

        return { message: "Update cinema successfully!" };
    } catch (err) {
        console.log(err);
        throw err;
    }
};

let deleteCinema = async (cinemaId) => {
    try {
        let cinema = await db.Cinema.findOne({
            where: { id: cinemaId },
        });

        if (!cinema)
            throw new ApiError(
                StatusCodes.BAD_REQUEST,
                "Delete failed because cinema is not exist!"
            );
        await db.Cinema.destroy({
            where: { id: cinemaId },
        });
        return { message: "Delete cinema successfully!" };
    } catch (err) {
        throw err;
    }
};

// Room
let getCinemaInfoById = async (cinemaId) => {
    try {
        // const currentTime = Date.now();
        const currentTime = new Date().setHours(19, 30, 0, 0);

        // Get cinema and all rooms of cinema
        let cinemaInfo = await db.Cinema.findOne({
            where: { id: cinemaId },
            attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
            include: [
                {
                    model: db.Room,
                    as: "rooms",
                    attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
                    include: [
                        {
                            model: db.Schedule,
                            as: "schedules",
                            attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
                            where: {
                                startTime: {
                                    [Op.lte]: currentTime,
                                },
                                endTime: {
                                    [Op.gte]: currentTime,
                                },
                            },
                            required: false,
                        },
                    ],
                },
            ],
        });

        return cinemaInfo;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

let getAllRoomByCinemaId = async (cinemaId) => {
    try {
        let rooms;
        if (cinemaId === "all") {
            rooms = await db.Room.findAll({
                attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
                include: [
                    {
                        model: db.Cinema,
                        as: "cinema",
                        attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
                    },
                ],
            });
        } else {
            rooms = await db.Room.findAll({
                where: { cinemaId: cinemaId },
                attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
                include: [
                    {
                        model: db.Cinema,
                        as: "cinema",
                        attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
                    },
                ],
            });
        }

        return rooms;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

let getRoomById = async (roomId) => {
    try {
        let room = await db.Room.findOne({
            where: { id: roomId },
            attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
            include: [
                {
                    model: db.Cinema,
                    as: "cinema",
                    attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
                },
            ],
        });
        return room;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

let createNewRoom = async (roomData) => {
    try {
        let room = await db.Room.create(roomData);
        return { message: "Create room successfully!" };
    } catch (err) {
        console.log(err);
        throw err;
    }
};

let updateRoom = async (roomData) => {
    try {
        let room = await db.Room.findOne({
            where: { id: roomData.id },
        });

        if (!room) {
            throw new ApiError(StatusCodes.BAD_GATEWAY, "room need to update not found");
        }

        await db.Room.update(roomData, {
            where: { id: roomData.id },
        });

        return { message: "Update room successfully!" };
    } catch (err) {
        console.log(err);
        throw err;
    }
};

let deleteRoom = async (roomId) => {
    try {
        let room = await db.Room.findOne({
            where: { id: roomId },
        });

        if (!room)
            throw new ApiError(StatusCodes.BAD_REQUEST, "Delete failed because room is not exist!");
        await db.Room.destroy({
            where: { id: roomId },
        });
        return { message: "Delete room successfully!" };
    } catch (err) {
        throw err;
    }
};

// schedule
let getAllSchedules = async () => {
    try {
        let schedules = await db.Schedule.findAll({
            attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
        });
        return schedules;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

let getScheduleById = async (scheduleId) => {
    try {
        let schedule = await db.Schedule.findOne({
            where: { id: scheduleId },
            attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
        });
        return schedule;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

let getNextThreeDaysSchedule = async (movieId) => {
    try {
        const now = dayjs().startOf("day").valueOf();
        const endNextThreeDays = dayjs().add(3, "day").endOf("day").unix() * 1000;

        let schedules = await db.Schedule.findAll({
            attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
            where: {
                movieId: movieId,
                startTime: {
                    [Op.gt]: now,
                    [Op.lt]: endNextThreeDays,
                },
            },
            raw: true,
        });

        return schedules;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

let createNewSchedule = async (scheduleData) => {
    try {
        let schedule = await db.Schedule.create(scheduleData);
        return { message: "Create cinema successfully!" };
    } catch (err) {
        console.log(err);
        throw err;
    }
};

let updateSchedule = async (scheduleData) => {
    try {
        let schedule = await db.Schedule.findOne({
            where: { id: scheduleData.id },
        });

        if (!schedule) {
            throw new ApiError(StatusCodes.BAD_GATEWAY, "Schedule need to delete not found");
        }

        await db.Schedule.update(scheduleData, {
            where: { id: scheduleData.id },
        });

        return { message: "Update Schedule successfully!" };
    } catch (err) {
        console.log(err);
        throw err;
    }
};

let deleteSchedule = async (scheduleId) => {
    try {
        let schedule = await db.Schedule.findOne({
            where: { id: scheduleId },
        });

        if (!schedule)
            throw new ApiError(
                StatusCodes.BAD_REQUEST,
                "Delete failed because Schedule is not exist!"
            );
        await db.Schedule.destroy({
            where: { id: scheduleId },
        });
        return { message: "Delete Schedule successfully!" };
    } catch (err) {
        throw err;
    }
};

// Voucher
let getAllVouchers = async () => {
    try {
        let vouchers = await db.Voucher.findAll({
            attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
        });
        return vouchers;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

let getVoucherByCode = async (voucherCode) => {
    try {
        let voucher = await db.Voucher.findOne({
            where: { voucherCode: voucherCode },
            attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
        });
        return voucher;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

let createNewVoucher = async (voucherData) => {
    try {
        let voucher = await db.Voucher.create(voucherData);
        return { message: "Create voucher successfully!" };
    } catch (err) {
        console.log(err);
        throw err;
    }
};

let updateVoucher = async (voucherData) => {
    try {
        let voucher = await db.Voucher.findOne({
            where: { id: voucherData.id },
        });

        if (!voucher) {
            throw new ApiError(StatusCodes.BAD_GATEWAY, "room need to update not found");
        }

        await db.Voucher.update(voucherData, {
            where: { id: voucherData.id },
        });

        return { message: "Update voucher successfully!" };
    } catch (err) {
        console.log(err);
        throw err;
    }
};

let deleteVoucher = async (voucherId) => {
    try {
        let voucher = await db.Voucher.findOne({
            where: { id: voucherId },
        });

        if (!voucher)
            throw new ApiError(
                StatusCodes.BAD_REQUEST,
                "Delete failed because voucher is not exist!"
            );
        await db.Voucher.destroy({
            where: { id: voucherId },
        });
        return { message: "Delete voucher successfully!" };
    } catch (err) {
        throw err;
    }
};

// Payment
let updatePaymentSuccess = async (bookingId) => {
    try {
        let booking = await db.Booking.findOne({
            where: { id: bookingId },
        });

        if (!booking) {
            throw new ApiError(StatusCodes.BAD_GATEWAY, "booking need to update not found");
        }

        booking.status = "PAID";
        await booking.save();

        if (booking.voucherId) {
            let voucher = await db.Voucher.findOne({
                where: { id: booking.voucherId },
            });
            voucher.status = "USED";
            await voucher.save();
        }

        return { message: "Update paid booking successfully!" };
    } catch (err) {
        console.log(err);
        throw err;
    }
};

let updatePaymentCancelled = async (bookingId) => {
    try {
        let booking = await db.Booking.findOne({
            where: { id: bookingId },
        });

        if (!booking) {
            throw new ApiError(StatusCodes.BAD_GATEWAY, "booking need to update not found");
        }

        booking.status = "CANCELLED";
        await booking.save();

        return { message: "Update cancelled booking successfully!" };
    } catch (err) {
        console.log(err);
        throw err;
    }
};

// Booking
let getAllBookingByUserId = async (userId) => {
    try {
        let bookingDetail = await db.Booking.findAll({
            where: { ...(userId !== "ALL" && { userId: userId }), status: "PAID" },
            attributes: { exclude: ["createdAt", "updatedAt"] },
            include: [
                {
                    model: db.Seat_Booking,
                    as: "seatBookings",
                    attributes: ["seatName", "seatPosition", "seatType", "price"],
                },
                {
                    model: db.Food_Booking,
                    as: "foodBookings",
                    attributes: ["quantity"],
                    include: [
                        {
                            model: db.Food_Menu,
                            as: "foodInfo",
                            attributes: ["foodName", "price"],
                        },
                    ],
                },
                {
                    model: db.Schedule,
                    as: "schedule",
                    attributes: ["startTime", "endTime"],
                    include: [
                        {
                            model: db.Room,
                            as: "room",
                            attributes: ["roomName"],
                            include: [
                                { model: db.Cinema, as: "cinema", attributes: ["cinemaName"] },
                            ],
                        },
                        {
                            model: db.Movie,
                            as: "movie",
                            attributes: ["movieName", "ageLimit", "audioType", "movieFormat"],
                        },
                    ],
                },
            ],
        });
        return bookingDetail;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

const createNewBookingId = async () => {
    try {
        let booking = await db.Booking.create({});
        return booking.id;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

const updateBooking = async (bookingData) => {
    try {
        await db.Booking.update(bookingData, { where: { id: bookingData.id } });

        return { code: 1, message: "Update booking successfully!" };
    } catch (err) {
        console.log(err);
        throw err;
    }
};

// Seat_Booking
const createSeatBookings = async (bookingId, seats) => {
    try {
        let formatSeatBookingsData = seats.map((seat) => {
            return {
                bookingId: bookingId,
                seatName: seat.seatName,
                seatPosition: JSON.stringify([seat.rowIndex, seat.colIndex]),
                seatType: seat.type,
                price: seat.type === 1 ? 60000 : 75000,
            };
        });

        let seatBookingData = await db.Seat_Booking.bulkCreate(formatSeatBookingsData);

        return { code: 1, message: "Create seat_bookings successfully!" };
    } catch (err) {
        console.log(err);
        throw err;
    }
};

const getAllBookedSeats = async (scheduleId) => {
    try {
        let bookings = await db.Booking.findAll({
            where: { scheduleId: scheduleId, status: "PAID" },
        });

        let bookingIds = bookings.map((booking) => booking.id);

        let bookedSeats = await db.Seat_Booking.findAll({
            where: {
                bookingId: {
                    [Op.in]: bookingIds,
                },
            },
        });

        return bookedSeats;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

// Food_Booking
const createFoodBookings = async (bookingId, foods) => {
    try {
        let formatFoodBookingsData = foods.map((item) => {
            return {
                bookingId: bookingId,
                foodId: item.food.id,
                quantity: item.quantity,
            };
        });

        let foodBookingData = await db.Food_Booking.bulkCreate(formatFoodBookingsData);

        return { code: 1, message: "Create food_bookings successfully!" };
    } catch (err) {
        console.log(err);
        throw err;
    }
};

// Overview
const getOverviewData = async () => {
    try {
        let startOfMonth = dayjs().startOf("month").valueOf();
        let endOfMonth = dayjs().endOf("month").valueOf();

        const userCount = await db.User.count();
        const movieCount = await db.Movie.count({
            where: { status: "now-showing" },
        });

        const bookings = await db.Booking.findAll({
            where: { status: "PAID" },
            attributes: ["id", "total", [col("schedule.startTime"), "startTime"]],
            include: [
                {
                    model: db.Schedule,
                    attributes: [],
                    as: "schedule",
                    where: {
                        startTime: {
                            [Op.between]: [startOfMonth, endOfMonth],
                        },
                    },
                },
            ],
        });

        const updatedBookings = bookings.map((booking) => {
            const plainBooking = booking.toJSON();

            return {
                ...plainBooking,
                startTime: dayjs(plainBooking.startTime).startOf("day").valueOf(),
            };
        });

        const bookingIds = bookings.map((booking) => booking.id);
        const ticketCount = await db.Seat_Booking.count({
            where: {
                bookingId: {
                    [Op.in]: bookingIds,
                },
            },
        });

        return {
            userCount: userCount,
            movieCount: movieCount,
            ticketCount: ticketCount,
            bookings: updatedBookings,
        };
    } catch (err) {
        console.log(err);
        throw err;
    }
};

export const dashboardService = {
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
    updatePaymentSuccess,
    updatePaymentCancelled,

    // Booking
    getAllBookingByUserId,
    createNewBookingId,
    updateBooking,

    // Seat_Booking
    createSeatBookings,
    getAllBookedSeats,

    // Food_Booking
    createFoodBookings,

    /// Overview
    getOverviewData,
};
