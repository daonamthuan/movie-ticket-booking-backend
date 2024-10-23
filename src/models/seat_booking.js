"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Seat_Booking extends Model {
        static associate(models) {
            // define association here
            Seat_Booking.belongsTo(models.Booking, {
                foreignKey: "bookingId",
                as: "seatBooking",
            });
        }
    }
    Seat_Booking.init(
        {
            bookingId: DataTypes.INTEGER,
            seatName: DataTypes.STRING,
            seatPosition: DataTypes.STRING,
            seatType: DataTypes.INTEGER,
            price: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Seat_Booking",
            timestamps: true,
        }
    );
    return Seat_Booking;
};
