"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert("Bookings", [
            {
                userId: 2,
                scheduleId: 1,
                totalSeatAmount: 150000, // O5 O6 [14, 4] [14, 5]
                totalFoodAmount: 90000,
                subtotal: 240000,
                voucherId: 1,
                voucherAmount: 50000,
                total: 190000,
                payment: "BANKING",
                status: "PAID",
            },
            {
                userId: 2,
                scheduleId: 1,
                totalSeatAmount: 150000, // O7 O8 [14, 6] [14, 7]
                totalFoodAmount: 115000,
                subtotal: 265000,
                voucherAmount: 0,
                total: 265000,
                payment: "BANKING",
                status: "PAID",
            },

            {
                userId: 2,
                scheduleId: 1,
                totalSeatAmount: 120000, // K8 K9 [10, 7] [10, 8]
                totalFoodAmount: 150000,
                subtotal: 270000,
                voucherAmount: 0,
                total: 270000,
                payment: "BANKING",
                status: "PAID",
            },
            {
                userId: 3,
                scheduleId: 1,
                totalSeatAmount: 120000, // H5 H6 [7, 4] [7, 5]
                totalFoodAmount: 90000,
                subtotal: 210000,
                voucherAmount: 0,
                total: 210000,
                payment: "BANKING",
                status: "PAID",
            },
            {
                userId: 2,
                scheduleId: 2,
                totalSeatAmount: 120000, // E5 E6 [4, 6] [4, 7]
                totalFoodAmount: 115000,
                subtotal: 235000,
                voucherAmount: 0,
                total: 235000,
                payment: "BANKING",
                status: "PAID",
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
