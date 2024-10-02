import Joi from "joi";
import { StatusCodes } from "http-status-codes";
import ApiError from "~/utils/ApiError";

const createFood = async (req, res, next) => {
    console.log("Validation req.body: ", req.body);
    console.log("Validation req.files: ", req.file);
    const foodSchema = Joi.object({
        foodName: Joi.string().required(),
        price: Joi.number().integer().min(0).required(),
        description: Joi.string().required(),
        image: Joi.string().required(),
    });

    try {
        await foodSchema.validateAsync(req.body, {
            abortEarly: false,
        });

        next();
    } catch (err) {
        const errorMessage = new Error(err).message;
        next(new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, errorMessage));
    }
};

const updateFood = async (req, res, next) => {
    console.log("Validation req.body 2: ", req.body);
    console.log("Validation req.files 2: ", req.file);
    const foodSchema = Joi.object({
        id: Joi.number().integer().required(),
        foodName: Joi.string().required(),
        price: Joi.number().integer().min(0).required(),
        description: Joi.string().required(),
        image: Joi.string().required(),
    });

    try {
        await foodSchema.validateAsync(req.body, {
            abortEarly: false,
        });

        next();
    } catch (err) {
        const errorMessage = new Error(err).message;
        next(new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, errorMessage));
    }
};

export const foodValidation = {
    createFood,
    updateFood,
};
