import { StatusCodes } from "http-status-codes";
import ApiError from "~/utils/ApiError";
import ms from "ms";
import { JwtProvider } from "~/providers/JwtProvider";
import { userService } from "~/services/userService";
import { env } from "~/config/environment";

const login = async (req, res, next) => {
    try {
        let userInfo = await userService.handleUserLogin(req.body);
        const accessToken = await JwtProvider.generateToken(
            userInfo,
            env.ACCESS_TOKEN_SECRET_KEY,
            5
            // "1h"
        );

        const refreshToken = await JwtProvider.generateToken(
            userInfo,
            env.REFRESH_TOKEN_SECRET_KEY,
            "14 days"
        );

        // Lưu ý: (ĐỪNG NHẦM LẪN) thời gian sống của cookie khác với thời gian sống của token.
        res.cookie("accessToken", accessToken, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: ms("14 days"),
        });

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: ms("14 days"),
        });

        res.status(StatusCodes.OK).json({
            ...userInfo,
        });
    } catch (err) {
        next(err);
    }
};

const logout = async (req, res, next) => {
    try {
        res.clearCookie("accessToken");
        res.clearCookie("refreshToken");
        res.status(StatusCodes.OK).json({ message: "Logout API success!" });
    } catch (err) {
        next(err);
    }
};

const refreshToken = async (req, res, next) => {
    try {
        const refreshTokenFromCookie = req.cookies?.refreshToken;
        const refreshTokenDecoded = await JwtProvider.verifyToken(
            refreshTokenFromCookie,
            env.REFRESH_TOKEN_SECRET_KEY
        );
        console.log("Verify refresh token successfully");

        const userInfo = {
            id: refreshTokenDecoded.id,
            email: refreshTokenDecoded.email,
            firstName: refreshTokenDecoded.firstName,
            lastName: refreshTokenDecoded.lastName,
            phoneNumber: refreshTokenDecoded.phoneNumber,
            gender: refreshTokenDecoded.gender,
            role: refreshTokenDecoded.role,
            membership: refreshTokenDecoded.membership,
            birthday: refreshTokenDecoded.birthday,
            image: refreshTokenDecoded.image,
        };

        const accessToken = await JwtProvider.generateToken(
            userInfo,
            env.ACCESS_TOKEN_SECRET_KEY,
            "1h"
        );

        res.cookie("accessToken", accessToken, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: ms("14 days"),
        });

        res.status(StatusCodes.OK).json({ message: "Refresh token successfully!" });
    } catch (err) {
        next(new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Refresh token failed!"));
    }
};

const getAllUsers = async (req, res, next) => {
    try {
        let users = await userService.getAllUsers();
        res.status(StatusCodes.OK).json(users);
    } catch (err) {
        next(err);
    }
};
const getAllGenders = async (req, res, next) => {
    try {
        let genders = await userService.getAllGenders();
        res.status(StatusCodes.OK).json(genders);
    } catch (err) {
        next(err);
    }
};

const getAllRoles = async (req, res, next) => {
    try {
        let roles = await userService.getAllRoles();
        res.status(StatusCodes.OK).json(roles);
    } catch (err) {
        next(err);
    }
};

const getAllMemberships = async (req, res, next) => {
    try {
        let memberships = await userService.getAllMemberships();
        res.status(StatusCodes.OK).json(memberships);
    } catch (err) {
        next(err);
    }
};

const getAgeLimits = async (req, res, next) => {
    try {
        let ageLimits = await userService.getAgeLimits();
        res.status(StatusCodes.OK).json(ageLimits);
    } catch (err) {
        next(err);
    }
};

const createNewUser = async (req, res, next) => {
    try {
        if (req.file) {
            req.body.image = req.file.path;
            const uploadedImage = {
                url: req.file.path,
                publicId: req.file.filename,
            };
        }

        let response = await userService.createNewUser(req.body);
        res.status(StatusCodes.CREATED).json(response);
    } catch (err) {
        next(err);
    }
};

const updateUser = async (req, res, next) => {
    try {
        if (req.file) {
            req.body.image = req.file.path;
            const uploadedImage = {
                url: req.file.path,
                publicId: req.file.filename,
            };
            console.log("Check upload cloudinary image in UPDATE USER: ", uploadedImage);
        }
        let response = await userService.updateUser(req.body);
        res.status(StatusCodes.OK).json(response);
    } catch (err) {
        next(err);
    }
};

const deleteUser = async (req, res, next) => {
    try {
        let response = await userService.deleteUser(req.query.userId);
        res.status(StatusCodes.OK).json(response);
    } catch (err) {
        next(err);
    }
};

export const userController = {
    login,
    logout,
    refreshToken,
    getAllUsers,
    getAllGenders,
    getAllRoles,
    getAllMemberships,
    createNewUser,
    updateUser,
    deleteUser,
    getAgeLimits,
};
