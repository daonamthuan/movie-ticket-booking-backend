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
        console.log("Check req.body create food: ", req.body);
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
};
