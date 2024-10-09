import cloudinary from "~/config/cloudinaryConfig";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";
import ApiError from "~/utils/ApiError";
import { StatusCodes } from "http-status-codes";
import { getFileNameFromPath } from "~/utils/helper";

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        asset_folder: "movie-ticket-booking",
    },
});

export const upload = multer({ storage: storage });

// export const uploadImageMiddleware = (req, res, next) => {
//     try {
//         if (req.file) {
//             req.body.image = req.file.path;
//         }
//         next();
//     } catch (err) {
//         console.log(err);
//         next(err);
//     }
// };

export const uploadImageMiddleware = (req, res, next) => {
    try {
        upload.single("image")(req, res, (err) => {
            if (err) {
                console.log(err);
                throw ApiError(
                    StatusCodes.INTERNAL_SERVER_ERROR,
                    `Error uploading file: ${err.message}`
                );
            }

            if (req.file) {
                req.body.image = req.file.path;
            }

            next();
        });
    } catch (err) {
        console.log(err);
        next(err);
    }
};

export const updateImageMiddleware = (req, res, next) => {
    try {
        upload.single("image")(req, res, async (err) => {
            if (err) {
                console.log(err);
                throw new ApiError(
                    StatusCodes.INTERNAL_SERVER_ERROR,
                    `Error uploading file: ${err.message}`
                );
            }

            if (req.file) {
                // truong hop image la file moi
                req.body.image = req.file.path;

                // neu da co anh? tu truoc
                if (req.body.image_old) {
                    try {
                        let publicId = getFileNameFromPath(req.body.image_old);
                        const result = await cloudinary.uploader.destroy(publicId);
                        if (result.result === "ok") {
                            console.log("Delete old image in cloudinary successfully");
                            delete req.body.image_old;
                        }
                    } catch (cloudinaryErr) {
                        console.log("Cloudinary error: ", cloudinaryErr);
                        next(
                            new ApiError(
                                StatusCodes.INTERNAL_SERVER_ERROR,
                                `Error deleting old image: ${cloudinaryErr.message}`
                            )
                        );
                    }
                }
            } else {
                // truong hop image va image_old deu la URL
                delete req.body.image_old;
            }

            next();
        });
    } catch (err) {
        console.log(err);
        next(err);
    }
};

export const deleteImageMiddleware = async (req, res, next) => {
    try {
        let publicId = req.query.publicId;
        console.log("Check public id: ", publicId);
        if (publicId) {
            await cloudinary.uploader.destroy(publicId);
        }
        next();
    } catch (err) {
        console.log(err);
        next(err);
    }
};
