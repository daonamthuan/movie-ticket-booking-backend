import { StatusCodes } from "http-status-codes";
import { JwtProvider } from "~/providers/JwtProvider";
import { env } from "~/config/environment";

const isAuthorized = async (req, res, next) => {
    const accessTokenFromCookie = req.cookies?.accessToken;
    if (!accessTokenFromCookie) {
        res.status(StatusCodes.UNAUTHORIZED).json({
            message: "Unauthorized! (Token not found)",
        });
        return;
    }

    try {
        const accessTokenDecoded = await JwtProvider.verifyToken(
            accessTokenFromCookie,
            env.ACCESS_TOKEN_SECRET_KEY
        );

        req.jwtDecoded = accessTokenDecoded;
        if (req.jwtDecoded.role !== "ADMIN") {
            console.log("Check jwt decoded: ", req.jwtDecoded);
            res.status(StatusCodes.UNAUTHORIZED).json({
                message: "No permission to access",
            });
            return;
        }

        next();
    } catch (err) {
        // If accessToken is expired => return HTTP 410 - GONE
        if (err.message?.includes("jwt expired")) {
            res.status(StatusCodes.GONE).json({
                message: "Need to refresh token",
            });
            return;
        }

        // If accessToken is invalid => return HTTP 401 - UNAUTHORIZED

        res.status(StatusCodes.UNAUTHORIZED).json({
            message: "Unauthorized! Please login ",
        });
    }
};

export const authMiddleware = {
    isAuthorized,
};
