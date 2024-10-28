"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert("Seat_Bookings", [
            {
                bookingId: 1,
                seatName: "O5",
                seatPosition: JSON.stringify([14, 4]),
                seatType: 1,
                price: 75000,
            },
            {
                bookingId: 1,
                seatName: "O6",
                seatPosition: JSON.stringify([14, 5]),
                seatType: 1,
                price: 75000,
            },

            {
                bookingId: 2,
                seatName: "O7",
                seatPosition: JSON.stringify([14, 6]),
                seatType: 2,
                price: 75000,
            },
            {
                bookingId: 2,
                seatName: "O8",
                seatPosition: JSON.stringify([14, 7]),
                seatType: 2,
                price: 75000,
            },

            {
                bookingId: 3,
                seatName: "K8",
                seatPosition: JSON.stringify([10, 7]),
                seatType: 2,
                price: 60000,
            },
            {
                bookingId: 3,
                seatName: "K9",
                seatPosition: JSON.stringify([10, 8]),
                seatType: 2,
                price: 60000,
            },

            {
                bookingId: 4,
                seatName: "H5",
                seatPosition: JSON.stringify([7, 4]),
                seatType: 2,
                price: 60000,
            },
            {
                bookingId: 4,
                seatName: "H6",
                seatPosition: JSON.stringify([7, 5]),
                seatType: 2,
                price: 60000,
            },

            {
                bookingId: 5,
                seatName: "E5",
                seatPosition: JSON.stringify([4, 6]),
                seatType: 1,
                price: 60000,
            },
            {
                bookingId: 5,
                seatName: "E6",
                seatPosition: JSON.stringify([4, 7]),
                seatType: 1,
                price: 60000,
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
