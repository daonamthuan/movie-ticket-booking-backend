"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Movie extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Movie.init(
        {
            movieName: DataTypes.STRING,
            category: DataTypes.STRING,
            duration: DataTypes.INTEGER,
            directors: DataTypes.STRING,
            actors: DataTypes.STRING,
            ageLimit: DataTypes.STRING,
            releaseDate: DataTypes.BIGINT,
            movieFormat: DataTypes.STRING,
            audioType: DataTypes.STRING,
            description: DataTypes.TEXT("long"),
            image: DataTypes.STRING,
            trailer: DataTypes.STRING,
            status: DataTypes.STRING,
            deletedAt: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: "Movie",
            paranoid: true,
            timestamps: true,
        }
    );
    return Movie;
};
