"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Schedule extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Schedule.belongsTo(models.Room, {
                foreignKey: "roomId",
                targetKey: "id",
                as: "roomSchedule",
            });
        }
    }
    Schedule.init(
        {
            roomId: DataTypes.INTEGER,
            movieId: DataTypes.INTEGER,
            startTime: DataTypes.BIGINT,
            endTime: DataTypes.BIGINT,
            deletedAt: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: "Schedule",
            paranoid: true,
            timestamps: true,
        }
    );
    return Schedule;
};
