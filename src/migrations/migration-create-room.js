"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Rooms", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },

            cinemaId: {
                type: Sequelize.INTEGER,
            },
            roomName: {
                type: Sequelize.STRING,
            },
            status: {
                type: Sequelize.STRING,
            },
            totalSeats: {
                type: Sequelize.INTEGER,
            },
            seatMap: {
                type: Sequelize.STRING,
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
        await queryInterface.dropTable("Rooms");
    },
};
