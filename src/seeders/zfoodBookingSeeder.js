"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert("Food_Bookings", [
            {
                bookingId: 1,
                foodId: 2,
                quantity: 1,
            },
            {
                bookingId: 2,
                foodId: 1,
                quantity: 1,
            },

            {
                bookingId: 3,
                foodId: 2,
                quantity: 1,
            },
            {
                bookingId: 4,
                foodId: 2,
                quantity: 1,
            },
            {
                bookingId: 5,
                foodId: 1,
                quantity: 1,
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
