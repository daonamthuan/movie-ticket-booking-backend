import Joi from "joi";
import { StatusCodes } from "http-status-codes";
import ApiError from "~/utils/ApiError";

const createMovie = async (req, res, next) => {
    console.log("Check req.body: ", req.body);
    console.log("Check req.files: ", req.file);
    const movieSchema = Joi.object({
        movieName: Joi.string().required(),
        category: Joi.string().required(),
        duration: Joi.number().integer().min(1).required(),
        directors: Joi.string().required(),
        actors: Joi.string().required(),

        ageLimit: Joi.string().required(),
        releaseDate: Joi.number().integer().min(new Date("1900-01-01").getTime()).required(),
        movieFormat: Joi.string().required(),
        audioType: Joi.string().required(),
        status: Joi.string().required(),

        trailer: Joi.string().required(),
        description: Joi.string().required(),
        image: Joi.string().required(),
    });

    try {
        await movieSchema.validateAsync(req.body, {
            abortEarly: false,
        });

        next();
    } catch (err) {
        const errorMessage = new Error(err).message;
        next(new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, errorMessage));
    }
};

const updateMovie = async (req, res, next) => {
    console.log("Check req.body 2: ", req.body);
    console.log("Check req.files 2: ", req.file);
    const movieSchema = Joi.object({
        id: Joi.number().integer().required(),

        movieName: Joi.string().required(),
        category: Joi.string().required(),
        duration: Joi.number().integer().min(1).required(),
        directors: Joi.string().required(),
        actors: Joi.string().required(),

        ageLimit: Joi.string().required(),
        releaseDate: Joi.number().integer().min(new Date("1900-01-01").getTime()).required(),
        movieFormat: Joi.string().required(),
        audioType: Joi.string().required(),
        status: Joi.string().required(),

        trailer: Joi.string().required(),
        description: Joi.string().required(),
        image: Joi.string().required(),
    });

    try {
        await movieSchema.validateAsync(req.body, {
            abortEarly: false,
        });

        next();
    } catch (err) {
        const errorMessage = new Error(err).message;
        next(new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, errorMessage));
    }
};

export const movieValidation = {
    createMovie,
    updateMovie,
};
