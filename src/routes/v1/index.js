import express from "express";
import { StatusCodes } from "http-status-codes";
import { userRoute } from "~/routes/v1/userRoute";
import { dashboardRoute } from "~/routes/v1/dashboardRoute";
import { imageRoute } from "./imageRoute";
import db from "~/models";

const Router = express.Router();

// For checking APIs
Router.get("/status", async (req, res) => {
    res.status(StatusCodes.OK).json({ message: "APIs V1 are ready to use." });
});

// User APIs
Router.use("/users", userRoute);

// Dashboard APIs
Router.use("/dashboards", dashboardRoute);

// Image APIs
Router.use("/images", imageRoute);

export const APIs_V1 = Router;
