"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    User.init(
        {
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING,
            phoneNumber: DataTypes.STRING,
            gender: DataTypes.STRING,
            role: DataTypes.STRING,
            membership: DataTypes.STRING,
            birthday: DataTypes.BIGINT,
            image: DataTypes.STRING,
            deletedAt: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: "User",
            paranoid: true,
            timestamps: true,
        }
    );
    return User;
};
