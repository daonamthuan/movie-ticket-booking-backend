import express from "express";
import { StatusCodes } from "http-status-codes";
import { userRoute } from "~/routes/v1/userRoute";
import { dashboardRoute } from "~/routes/v1/dashboardRoute";
import db from "~/models";

const Router = express.Router();

// For checking APIs
Router.get("/status", async (req, res) => {
    let data = await db.Booking.findAll({
        where: { id: 2 },
        include: [
            {
                model: db.Food_Menu,
                as: "foods",
            },
        ],
    });
    res.status(StatusCodes.OK).json({ message: "APIs V1 are ready to use.", data: data });
});

// User APIs
Router.use("/users", userRoute);

// Dashboard APIs
Router.use("/dashboards", dashboardRoute);

export const APIs_V1 = Router;
