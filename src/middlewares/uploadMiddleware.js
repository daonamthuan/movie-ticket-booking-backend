import cloudinary from "~/config/cloudinaryConfig";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        asset_folder: "cinema-booking",
    },
});

export const upload = multer({ storage: storage });
