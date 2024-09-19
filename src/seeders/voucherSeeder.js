"use strict";

const seatMap = Array.from({ length: 10 }, () => Array.from({ length: 12 }, () => 1));

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert("Vouchers", [
            {
                voucherCode: "GIAMGIA50K",
                amount: 500000,
                status: "UNUSED",
                validFrom: new Date().getTime(),
                validUntil: BigInt(Date.now() + 7 * 86400000),
            },
            {
                voucherCode: "GIAMGIA100K",
                amount: 100000,
                status: "UNUSED",
                validFrom: new Date().getTime(),
                validUntil: BigInt(Date.now() + 7 * 86400000),
            },
            {
                voucherCode: "GIUATHANGNUAGIA",
                amount: 0.5,
                status: "UNUSED",
                validFrom: new Date().getTime(),
                validUntil: BigInt(Date.now() + 7 * 86400000),
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
