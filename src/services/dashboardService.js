import db from "~/models";
import ApiError from "~/utils/ApiError";
import { StatusCodes } from "http-status-codes";
import { Op } from "sequelize";
import dayjs from "dayjs";

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
                    as: "cinemaRooms",
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
                    as: "cinemaRooms",
                    attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
                    include: [
                        {
                            model: db.Schedule,
                            as: "roomSchedule",
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
                        as: "cinemaRooms",
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
                        as: "cinemaRooms",
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
            throw new ApiError(StatusCodes.BAD_GATEWAY, "room need to delete not found");
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
    createNewRoom,
    updateRoom,
    deleteRoom,

    // schedule
    getAllSchedules,
    getNextThreeDaysSchedule,
    createNewSchedule,
    updateSchedule,
    deleteSchedule,
};
