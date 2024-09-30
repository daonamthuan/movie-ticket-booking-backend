import db from "~/models";
import ApiError from "~/utils/ApiError";
import { StatusCodes } from "http-status-codes";
import { where } from "sequelize";

let getRevenueLast30Days = async (userId) => {
    try {
    } catch (err) {
        throw err;
    }
};

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
        throw err;
    }
};

let createNewMovie = async (movieData) => {
    try {
        let movie = await db.Movie.create(movieData);
        return { message: "Create movie successfully!" };
    } catch (err) {
        throw err;
    }
};

let updateMovie = async (movieData) => {
    try {
        console.log("In services");
        let movie = await db.Movie.findOne({
            where: { id: movieData.id },
        });

        if (!movie) {
            throw new ApiError(StatusCodes.BAD_GATEWAY, "Movie need to delete not found");
        }

        await db.Movie.update(movieData, {
            where: { id: movieData.id },
        });

        return { message: "Create movie successfully!" };
    } catch (err) {
        console.log("Error in services: ", err);
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
        throw err;
    }
};
export const dashboardService = {
    getRevenueLast30Days,
    getAllMoviesByStatus,
    createNewMovie,
    updateMovie,
    deleteMovie,
};
