const { Sequelize } = require("sequelize");
require("dotenv").config();
// const env = process.env.BUILD_MODE || "development";
// const config = require(__dirname + "/../config/config.json")[env];

// replace 'database', 'username', 'password'
const sequelize = new Sequelize(
    process.env.DB_DATABASE_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
        logging: false,
        timezone: "+07:00",
    }
);

let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

module.exports = connectDB;
