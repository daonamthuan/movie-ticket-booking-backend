import { StatusCodes } from "http-status-codes";
import cloudinary from "~/config/cloudinaryConfig";

const uploadImageToCloudinary = async (file) => {
    try {
        const imagePath = file.path; // Đường dẫn của file tạm thời
        const result = await cloudinary.uploader.upload(imagePath);

        return {
            url: result.secure_url,
            publicId: result.public_id,
        };
    } catch (err) {
        throw err;
    }
};

const removeImageFromCloudinary = async (publicId) => {
    try {
        const response = await cloudinary.uploader.destroy(publicId);
        if (response.result === "not found") {
            throw new Error(StatusCodes.BAD_REQUEST, "Image not found");
        }

        return {
            message: "Delete image from cloud successfully!",
        };
    } catch (err) {
        throw err;
    }
};

export const imageService = {
    uploadImageToCloudinary,
    removeImageFromCloudinary,
};
