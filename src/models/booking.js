"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Booking extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Booking.belongsToMany(models.Food_Menu, {
                through: models.Food_Booking,
                foreignKey: "bookingId",
                otherKey: "foodId",
                as: "foods",
            });

            Booking.hasMany(models.Food_Booking, {
                foreignKey: "bookingId",
                as: "foodBookings",
            });

            Booking.hasMany(models.Seat_Booking, {
                foreignKey: "bookingId",
                as: "seatBookings",
            });

            Booking.belongsTo(models.Schedule, {
                foreignKey: "scheduleId",
                targetKey: "id",
                as: "schedule",
            });
        }
    }
    Booking.init(
        {
            userId: DataTypes.INTEGER,
            scheduleId: DataTypes.INTEGER,
            totalSeatAmount: DataTypes.INTEGER,
            totalFoodAmount: DataTypes.INTEGER,
            subtotal: DataTypes.INTEGER,
            voucherId: DataTypes.INTEGER,
            voucherAmount: DataTypes.INTEGER,
            total: DataTypes.INTEGER,
            payment: DataTypes.STRING,
            status: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Booking",
            timestamps: true,
        }
    );
    return Booking;
};
