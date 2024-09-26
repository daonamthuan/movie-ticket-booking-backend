import "dotenv/config";

export const env = {
    LOCAL_DEV_APP_PORT: process.env.LOCAL_DEV_APP_PORT,
    LOCAL_DEV_APP_HOST: process.env.LOCAL_DEV_APP_HOST,

    BUILD_MODE: process.env.BUILD_MODE,

    ACCESS_TOKEN_SECRET_KEY: process.env.ACCESS_TOKEN_SECRET_KEY,
    REFRESH_TOKEN_SECRET_KEY: process.env.REFRESH_TOKEN_SECRET_KEY,

    CLOUD_NAME: process.env.CLOUD_NAME,
    CLOUD_API_KEY: process.env.CLOUD_API_KEY,
    CLOUD_API_SECRET: process.env.CLOUD_API_SECRET,
};
