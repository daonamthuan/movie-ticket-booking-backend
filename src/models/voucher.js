"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Voucher extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Voucher.init(
        {
            voucherCode: DataTypes.STRING,
            amount: DataTypes.FLOAT,
            status: DataTypes.STRING,
            validFrom: DataTypes.BIGINT,
            validUntil: DataTypes.BIGINT,
            deletedAt: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: "Voucher",
            paranoid: true,
            timestamps: true,
        }
    );
    return Voucher;
};
