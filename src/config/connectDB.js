const { Sequelize } = require("sequelize");
const env = process.env.BUILD_MODE || "development";
const config = require(__dirname + "/../config/config.json")[env];

// replace 'database', 'username', 'password'
const sequelize = new Sequelize(config.database, config.username, null, {
    host: config.host,
    dialect: config.dialect,
    logging: false,
});

let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

module.exports = connectDB;
