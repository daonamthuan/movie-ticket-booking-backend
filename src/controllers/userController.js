import { StatusCodes } from "http-status-codes";
import ApiError from "~/utils/ApiError";
import ms from "ms";
import { JwtProvider } from "~/providers/JwtProvider";
import { userService } from "~/services/userService";
import { env } from "~/config/environment";

/// Mock nhanh thông tin user thay vì phải tạo Database rồi query.
const MOCK_DATABASE = {
    USER: {
        ID: "trungquandev-sample-id-12345678",
        EMAIL: "trungquandev.official@gmail.com",
        PASSWORD: "trungquandev@123",
    },
};

const createNewUser = async (req, res, next) => {
    try {
        let response = await userService.createNewUser(req.body);
        res.status(StatusCodes.CREATED).json(response);
    } catch (err) {
        next(err);
    }
};

const login = async (req, res, next) => {
    try {
        let userInfo = await userService.handleUserLogin(req.body);
        console.log("userInfo in controller: ", userInfo);
        const accessToken = await JwtProvider.generateToken(
            userInfo,
            env.ACCESS_TOKEN_SECRET_KEY,
            5
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
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
};

const refreshToken = async (req, res) => {
    try {
        const refreshTokenFromCookie = req.cookies?.refreshToken;
        const refreshTokenDecoded = await JwtProvider.verifyToken(
            refreshTokenFromCookie,
            env.REFRESH_TOKEN_SECRET_KEY
        );

        const userInfo = {
            id: refreshTokenDecoded.id,
            email: refreshTokenDecoded.email,
        };

        const accessToken = await JwtProvider.generateToken(
            userInfo,
            env.ACCESS_TOKEN_SECRET_KEY,
            5
        );

        res.cookie("accessToken", accessToken, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: ms("14 days"),
        });

        res.status(StatusCodes.OK).json({ message: "Refresh token successfully!" });
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Refresh token failed!" });
    }
};

export const userController = {
    createNewUser,
    login,
    logout,
    refreshToken,
};
