import Joi from "joi";
import { StatusCodes } from "http-status-codes";
import ApiError from "~/utils/ApiError";

const createRoom = async (req, res, next) => {
    const roomSchema = Joi.object({
        roomName: Joi.string().required(),
        cinemaId: Joi.number().integer().required(),
        totalSeats: Joi.number().integer().min(1).required(),
        note: Joi.string().allow("").optional(),
        seatMap: Joi.string().required(),
    });

    try {
        await roomSchema.validateAsync(req.body, {
            abortEarly: false,
        });

        next();
    } catch (err) {
        const errorMessage = new Error(err).message;
        next(new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, errorMessage));
    }
};

const updateRoom = async (req, res, next) => {
    const roomSchema = Joi.object({
        id: Joi.number().integer().required(),
        roomName: Joi.string().required(),
        cinemaId: Joi.number().integer().required(),
        totalSeats: Joi.number().integer().min(1).required(),
        note: Joi.string().allow("").optional(),
        seatMap: Joi.string().required(),
    });

    try {
        await roomSchema.validateAsync(req.body, {
            abortEarly: false,
        });

        next();
    } catch (err) {
        const errorMessage = new Error(err).message;
        next(new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, errorMessage));
    }
};

export const roomValidation = {
    createRoom,
    updateRoom,
};
