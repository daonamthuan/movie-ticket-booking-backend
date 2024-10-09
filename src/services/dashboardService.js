import db from "~/models";
import ApiError from "~/utils/ApiError";
import { StatusCodes } from "http-status-codes";
import { Op } from "sequelize";

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
                attributes: { exclude: ["createdAt", "updatedAt"] },
            });
        } else {
            movies = await db.Movie.findAll({
                where: { status: status },
                attributes: { exclude: ["createdAt", "updatedAt"] },
            });
        }

        return movies;
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
            attributes: { exclude: ["createdAt", "updatedAt"] },
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
            attributes: { exclude: ["createdAt", "updatedAt"] },
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
let getCinemaById = async (cinemaId) => {
    try {
        // const currentTime = Date.now();
        const currentTime = new Date().setHours(19, 30, 0, 0);

        // Get cinema and all rooms of cinema
        let cinemaInfo = await db.Cinema.findOne({
            where: { id: cinemaId },
            attributes: { exclude: ["createdAt", "updatedAt"] },
            include: [
                {
                    model: db.Room,
                    as: "cinemaRooms",
                    attributes: { exclude: ["createdAt", "updatedAt"] },
                    include: [
                        {
                            model: db.Schedule,
                            as: "roomSchedule",
                            attributes: { exclude: ["createdAt", "updatedAt"] },
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

export const dashboardService = {
    getRevenueLast30Days,
    getAllMoviesByStatus,
    createNewMovie,
    updateMovie,
    deleteMovie,
    getAllFoods,
    createNewFood,
    updateFood,
    deleteFood,
    getAllCinemas,
    createNewCinema,
    updateCinema,
    deleteCinema,
    getCinemaById,
    createNewRoom,
    updateRoom,
    deleteRoom,
};
