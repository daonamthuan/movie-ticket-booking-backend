"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Room extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Room.belongsTo(models.Cinema, {
                foreignKey: "cinemaId",
                targetKey: "id",
                as: "cinemaRooms",
            });

            Room.hasMany(models.Schedule, {
                foreignKey: "roomId",
                as: "roomSchedule",
            });
        }
    }
    Room.init(
        {
            cinemaId: DataTypes.INTEGER,
            roomName: DataTypes.STRING,
            totalSeats: DataTypes.INTEGER,
            note: DataTypes.STRING,
            seatMap: DataTypes.TEXT,
            deletedAt: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: "Room",
            paranoid: true,
            timestamps: true,
        }
    );
    return Room;
};
