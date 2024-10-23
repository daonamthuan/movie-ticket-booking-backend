"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Food_Booking extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Food_Booking.belongsTo(models.Booking, {
                foreignKey: "bookingId",
                as: "booking",
            });
            Food_Booking.belongsTo(models.Food_Menu, {
                foreignKey: "foodId",
                as: "foodInfo",
            });
        }
    }
    Food_Booking.init(
        {
            bookingId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: "Bookings",
                    key: "id",
                },
                primaryKey: true,
            },
            foodId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: "Food_Menus",
                    key: "id",
                },
                primaryKey: true,
            },
            quantity: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "Food_Booking",
            timestamps: true,
        }
    );
    return Food_Booking;
};
