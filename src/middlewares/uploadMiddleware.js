import cloudinary from "~/config/cloudinaryConfig";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";
import ApiError from "~/utils/ApiError";
import { StatusCodes } from "http-status-codes";

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        asset_folder: "movie-ticket-booking",
    },
});

export const upload = multer({ storage: storage });

export const uploadMiddleware = (req, res, next) => {
    if (req.file) {
        console.log("Has file: ", req.file);
        req.body.image = req.file.path;
        next();
    } else {
        if (req.body.id) {
            next();
        } else {
            next(new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Upload ảnh thất bại!"));
        }
    }
};

export const deleteImageMiddleware = async (req, res, next) => {
    try {
        let publicId = req.query.publicId;
        if (!publicId) {
            return res
                .status(400)
                .json({ message: "Không thể xóa vì thông tin ảnh không được cung cấp" });
        }
        const result = await cloudinary.uploader.destroy(publicId);
        if (result.result === "ok") {
            console.log("Delete image in cloudinary successfully");
            next();
        } else {
            throw new ApiError(StatusCodes.BAD_REQUEST, "Không tìm thấy ảnh để xóa");
        }
    } catch (err) {
        next(err);
    }
};
