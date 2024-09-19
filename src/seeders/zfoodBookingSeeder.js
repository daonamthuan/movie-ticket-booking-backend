"use strict";

const seatMap = Array.from({ length: 10 }, () => Array.from({ length: 12 }, () => 1));

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert("Food_Bookings", [
            {
                bookingId: 1,
                foodId: 1,
                quantity: 1,
            },
            {
                bookingId: 2,
                foodId: 2,
                quantity: 1,
            },
            {
                bookingId: 2,
                foodId: 10,
                quantity: 1,
            },
            {
                bookingId: 3,
                foodId: 8,
                quantity: 2,
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
