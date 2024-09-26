import { StatusCodes } from "http-status-codes";
import { imageService } from "~/services/imageService";
import ApiError from "~/utils/ApiError";

const uploadImage = async (req, res, next) => {
    try {
        if (!req.file) {
            throw new ApiError(StatusCodes.BAD_REQUEST, "No image uploaded");
        }
        const uploadedImage = {
            url: req.file.path,
            publicId: req.file.filename,
        };
        return res.status(StatusCodes.CREATED).json(uploadedImage);
    } catch (err) {
        next(err);
    }
};

const removeImage = async (req, res, next) => {
    try {
        let response = await imageService.removeImageFromCloudinary(req.params.publicId);

        return res.status(StatusCodes.OK).json(response);
    } catch (err) {
        next(err);
    }
};

export const imageController = {
    uploadImage,
    removeImage,
};
