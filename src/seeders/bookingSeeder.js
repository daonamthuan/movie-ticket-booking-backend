"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert("Bookings", [
            {
                userId: 2,
                scheduleId: 1,
                seatPosition: "[6,5],[6,6]",
                totalSeatAmount: 120000,
                totalFoodAmount: 115000,
                u22Discount: 0,

                subtotal: 235000,
                voucherDiscount: 0,
                total: 235000,
                payment: "CASH",
            },
            {
                userId: 3,
                scheduleId: 2,
                seatPosition: "[9,5],[9,6]",
                totalSeatAmount: 150000,
                totalFoodAmount: 112000,
                u22Discount: 0,

                subtotal: 262000,
                voucherDiscount: 0,
                total: 262000,
                payment: "BANKING",
            },
            {
                userId: 4,
                scheduleId: 3,
                seatPosition: "[4,5],[4,6]",
                totalSeatAmount: 120000,
                totalFoodAmount: 30000,
                u22Discount: 30000,

                subtotal: 120000,
                voucherDiscount: 0,
                total: 120000,
                payment: "MOMO",
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
