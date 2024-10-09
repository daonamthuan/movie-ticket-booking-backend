"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Bookings", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },

            userId: {
                type: Sequelize.INTEGER,
            },
            scheduleId: {
                type: Sequelize.INTEGER,
            },
            seatPosition: {
                type: Sequelize.STRING,
            },
            totalSeatAmount: {
                type: Sequelize.INTEGER,
            },
            totalFoodAmount: {
                type: Sequelize.INTEGER,
            },
            u22Discount: {
                type: Sequelize.INTEGER,
            },

            subtotal: {
                type: Sequelize.INTEGER,
            },
            voucherId: {
                type: Sequelize.INTEGER,
            },
            voucherDiscount: {
                type: Sequelize.INTEGER,
            },
            total: {
                type: Sequelize.INTEGER,
            },
            payment: {
                type: Sequelize.STRING,
            },

            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"),
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Bookings");
    },
};
