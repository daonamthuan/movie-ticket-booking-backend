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
                as: "foodData",
            });
        }
    }
    Booking.init(
        {
            userId: DataTypes.INTEGER,
            scheduleId: DataTypes.INTEGER,
            seatPosition: DataTypes.STRING,
            totalSeatAmount: DataTypes.INTEGER,
            totalFoodAmount: DataTypes.INTEGER,
            u22Discount: DataTypes.INTEGER,

            subtotal: DataTypes.INTEGER,
            voucherId: DataTypes.INTEGER,
            voucherDiscount: DataTypes.INTEGER,
            total: DataTypes.INTEGER,
            payment: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Booking",
            timestamps: true,
        }
    );
    return Booking;
};
