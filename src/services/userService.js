import db from "~/models";
import bcrypt from "bcryptjs";
import ApiError from "~/utils/ApiError";
import { StatusCodes } from "http-status-codes";
import { raw } from "mysql2";

const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (password) => {
    try {
        let hashedPassword = bcrypt.hashSync(password, salt);
        return hashedPassword;
    } catch (err) {
        throw err;
    }
};

let checkUserEmailIsExist = async (email) => {
    try {
        let user = await db.User.findOne({
            where: { email: email },
        });
        if (user) return true;
        return false;
    } catch (err) {
        throw err;
    }
};

let createNewUser = async (userInfo) => {
    try {
        let isEmailExist = await checkUserEmailIsExist(userInfo.email);

        if (isEmailExist) {
            console.log("Email already exists");
            throw new ApiError(StatusCodes.BAD_REQUEST, "Email already exist");
        } else {
            let hashedPassword = await hashUserPassword(userInfo.password);
            await db.User.create({
                email: userInfo.email,
                password: hashedPassword,
                firstName: userInfo.firstName,
                lastName: userInfo.lastName,
                phoneNumber: userInfo.phoneNumber,
                gender: userInfo.gender,
                role: userInfo.roleId,
                membership: userInfo.membership,
                birthday: userInfo.birthday,
            });
            return { message: "Create new user successfully" };
        }
    } catch (err) {
        throw err;
    }
};

let handleUserLogin = async (userInfo) => {
    try {
        console.log("User Info: ", userInfo);
        let user = await db.User.findOne({
            where: { email: userInfo.email },
            attributes: { exclude: ["createdAt", "updatedAt"] },
            raw: true,
        });

        console.log("user response 1: ", user);
        if (user) {
            if (bcrypt.compareSync(userInfo.password, user.password)) {
                delete user.password;
                console.log("user response 2: ", user);
                return user;
            }
        }
        throw new ApiError(StatusCodes.BAD_REQUEST, "Your email or password is incorrect");
    } catch (err) {
        throw err;
    }
};

export const userService = {
    checkUserEmailIsExist,
    createNewUser,
    handleUserLogin,
};
