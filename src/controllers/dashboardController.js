import { dashboardService } from "~/services/dashboardService";
import { StatusCodes } from "http-status-codes";

const access = async (req, res, next) => {
    try {
        const userInfo = {
            id: req.jwtDecoded.id,
            email: req.jwtDecoded.email,
        };

        res.status(StatusCodes.OK).json(userInfo);
    } catch (err) {
        next(err);
    }
};

const getRevenueLast30Days = async (req, res, next) => {
    try {
        let data = await dashboardService.getRevenueLast30Days();
        // res.
    } catch (err) {
        next(err);
    }
};

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
        next(err);
    }
};

const updateMovie = async (req, res, next) => {
    try {
        console.log("In controller");
        let movieData = req.body;
        let response = await dashboardService.updateMovie(movieData);
        res.status(StatusCodes.OK).json(response);
    } catch (err) {
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

export const dashboardController = {
    access,
    getRevenueLast30Days,
    getAllMoviesByStatus,
    createNewMovie,
    updateMovie,
    deleteMovie,
};
