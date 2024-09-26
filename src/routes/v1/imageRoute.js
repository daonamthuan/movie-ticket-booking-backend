import express from "express";
import { imageController } from "~/controllers/imageController";
import { upload } from "~/middlewares/uploadMiddleware";

const Router = express.Router();

Router.route("/upload").post(upload.single("image"), imageController.uploadImage);
Router.route("/remove/:publicId").delete(imageController.removeImage);

export const imageRoute = Router;
