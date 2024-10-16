import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { corsOptions } from "~/config/corsOptions";
import { APIs_V1 } from "~/routes/v1/";
import { errorHandlingMiddleware } from "./middlewares/errorHandlingMiddleware";
import connectDB from "./config/connectDB";
import { env } from "./config/environment";

const START_SERVER = () => {
    const app = express();

    // Fix Cache from disk from ExpressJS
    app.use((req, res, next) => {
        res.set("Cache-Control", "no-store");
        next();
    });

    app.use(cookieParser());
    app.use(cors(corsOptions));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    app.use("/v1", APIs_V1);

    // Middleware centralized error handling
    app.use(errorHandlingMiddleware);

    // test connection to DB
    connectDB();

    app.listen(env.LOCAL_DEV_APP_PORT, env.LOCAL_DEV_APP_HOST, () => {
        console.log(
            `Back-end Server is running successfully at HOST: ${env.LOCAL_DEV_APP_HOST} and PORT: ${env.LOCAL_DEV_APP_PORT}`
        );
    });
};

(async () => {
    try {
        console.log("Starting Server...");
        START_SERVER();
    } catch (error) {
        console.error(error);
        process.exit(0);
    }
})();
