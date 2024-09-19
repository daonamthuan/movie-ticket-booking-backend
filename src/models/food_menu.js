"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Food_Menu extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Food_Menu.belongsToMany(models.Booking, {
                through: models.Food_Booking,
                foreignKey: "foodId",
                otherKey: "bookingId",
                as: "bookings",
            });

            Food_Menu.hasMany(models.Food_Booking, {
                foreignKey: "foodId",
                as: "bookingData",
            });
        }
    }
    Food_Menu.init(
        {
            foodName: DataTypes.STRING,
            price: DataTypes.INTEGER,
            description: DataTypes.STRING,
            image: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Food_Menu",
        }
    );
    return Food_Menu;
};
