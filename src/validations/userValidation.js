import Joi from "joi";
import { StatusCodes } from "http-status-codes";
import ApiError from "~/utils/ApiError";

const createNewUser = async (req, res, next) => {
    const userSchema = Joi.object({
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
            .required(),
        password: Joi.string()
            .pattern(
                new RegExp("^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,30}$")
            )
            .required(),
        firstName: Joi.string().pattern(new RegExp("^[a-zA-Z\\s]+$")).required(),
        lastName: Joi.string().pattern(new RegExp("^[a-zA-Z\\s]+$")).required(),
        phoneNumber: Joi.string()
            .pattern(/^0\d{9}$/)
            .optional(),
        gender: Joi.string().optional(),
        role: Joi.string().optional(),
        membership: Joi.string().optional(),
        birthday: Joi.number()
            .integer()
            .min(new Date("1900-01-01").getTime())
            .max(Date.now())
            .optional(),
    });

    try {
        await userSchema.validateAsync(req.body, {
            abortEarly: false,
        });

        next();
    } catch (err) {
        const errorMessage = new Error(err).message;
        next(new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, errorMessage));
    }
};

export const userValidation = {
    createNewUser,
};
