"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Vouchers", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },

            voucherCode: {
                type: Sequelize.STRING,
            },
            amount: {
                type: Sequelize.FLOAT,
            },
            status: {
                type: Sequelize.STRING,
            },
            validFrom: {
                type: Sequelize.BIGINT,
            },
            validUntil: {
                type: Sequelize.BIGINT,
            },

            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Vouchers");
    },
};
