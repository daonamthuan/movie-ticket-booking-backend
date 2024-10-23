"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Seat_Bookings", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },

            bookingId: {
                type: Sequelize.INTEGER,
            },
            seatName: {
                type: Sequelize.STRING,
            },
            seatPosition: {
                type: Sequelize.STRING,
            },
            seatType: {
                type: Sequelize.INTEGER,
            },
            price: {
                type: Sequelize.INTEGER,
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
        await queryInterface.dropTable("Seat_Bookings");
    },
};
