import Joi from "joi";
import { StatusCodes } from "http-status-codes";
import ApiError from "~/utils/ApiError";

const createCinema = async (req, res, next) => {
    console.log("Validation req.body: ", req.body);
    console.log("Validation req.files: ", req.file);
    const cinemaSchema = Joi.object({
        cinemaName: Joi.string().required(),
        totalRooms: Joi.number().integer().required(),
        address: Joi.string().required(),
        hotline: Joi.string().required(),
        image: Joi.string().required(),
    });

    try {
        await cinemaSchema.validateAsync(req.body, {
            abortEarly: false,
        });

        next();
    } catch (err) {
        const errorMessage = new Error(err).message;
        next(new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, errorMessage));
    }
};

const updateCinema = async (req, res, next) => {
    console.log("Validation req.body 2: ", req.body);
    console.log("Validation req.files 2: ", req.file);
    const cinemaSchema = Joi.object({
        id: Joi.number().integer().required(),
        cinemaName: Joi.string().required(),
        totalRooms: Joi.number().integer().required(),
        address: Joi.string().required(),
        hotline: Joi.string().required(),
        image: Joi.string().required(),
    });

    try {
        await cinemaSchema.validateAsync(req.body, {
            abortEarly: false,
        });

        next();
    } catch (err) {
        const errorMessage = new Error(err).message;
        next(new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, errorMessage));
    }
};

export const cinemaValidation = {
    createCinema,
    updateCinema,
};
