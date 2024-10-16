import db from "~/models";
import bcrypt from "bcryptjs";
import ApiError from "~/utils/ApiError";
import { StatusCodes } from "http-status-codes";

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

let handleUserLogin = async (userInfo) => {
    try {
        let user = await db.User.findOne({
            where: { email: userInfo.email },
            attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
            raw: true,
        });

        if (user) {
            if (bcrypt.compareSync(userInfo.password, user.password)) {
                delete user.password;
                return user;
            }
        }
        throw new ApiError(StatusCodes.BAD_REQUEST, "Your email or password is incorrect");
    } catch (err) {
        throw err;
    }
};

let getAllUsers = async () => {
    try {
        let users = await db.User.findAll({
            attributes: { exclude: ["password", "createdAt", "updatedAt"] },
        });
        return users;
    } catch (err) {
        throw err;
    }
};

let getAllGenders = async () => {
    try {
        let genders = await db.Allcode.findAll({
            where: { type: "GENDER" },
            attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
        });
        return genders;
    } catch (err) {
        throw err;
    }
};

let getAllRoles = async () => {
    try {
        let roles = await db.Allcode.findAll({
            where: { type: "ROLE" },
            attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
        });

        return roles;
    } catch (err) {
        throw err;
    }
};

let getAllMemberships = async () => {
    try {
        let memberships = await db.Allcode.findAll({
            where: { type: "MEMBERSHIP" },
            attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
        });

        return memberships;
    } catch (err) {
        throw err;
    }
};

let getAgeLimits = async () => {
    try {
        let ageLimits = await db.Allcode.findAll({
            where: { type: "AGE_LIMIT" },
            attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
        });

        return ageLimits;
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
            let user = await db.User.create({
                email: userInfo.email,
                password: hashedPassword,
                firstName: userInfo.firstName,
                lastName: userInfo.lastName,
                phoneNumber: userInfo.phoneNumber,
                gender: userInfo.gender,
                role: userInfo.role,
                membership: userInfo.membership,
                birthday: userInfo.birthday,
                image: userInfo.image,
            });
            return { message: "Create new user successfully" };
        }
    } catch (err) {
        throw err;
    }
};

let updateUser = async (userInfo) => {
    try {
        console.log("Check userInfo: ", userInfo);
        let isEmailExist = await checkUserEmailIsExist(userInfo.email);
        console.log("isEmailExist: ", isEmailExist);

        if (!isEmailExist) {
            console.log("User's email is not exists");
            throw new ApiError(StatusCodes.BAD_REQUEST, "User's email is not exists");
        } else {
            let user = await db.User.findOne({
                where: { email: userInfo.email },
            });
            console.log("User update: ", user);
            for (let field in userInfo) {
                if (field === "email") {
                    continue;
                }
                user[field] = userInfo[field];
            }

            await user.save();
            return { message: "Update user successfully!" };
        }
    } catch (err) {
        throw err;
    }
};

let deleteUser = async (userId) => {
    try {
        let user = await db.User.findOne({
            where: { id: userId },
        });

        if (!user) {
            throw new ApiError(StatusCodes.BAD_REQUEST, "Delete failed because email isn't exist");
        }

        await db.User.destroy({
            where: { id: userId },
        });
        return { message: "Delete user successfully!" };
    } catch (err) {
        throw err;
    }
};

export const userService = {
    checkUserEmailIsExist,
    handleUserLogin,
    getAllUsers,
    getAllGenders,
    getAllRoles,
    getAllMemberships,
    createNewUser,
    updateUser,
    deleteUser,
    getAgeLimits,
};
