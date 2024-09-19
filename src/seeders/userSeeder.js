"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert("Users", [
            {
                email: "admin@gmail.com",
                password: "123456Aa@",
                firstName: "Văn A",
                lastName: "Nguyễn",
                phoneNumber: "0989999999",
                gender: "MALE",
                role: "ADMIN",
                membership: "SLIVER",
                birthday: new Date(2000, 11, 27).getTime(),
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                email: "daonamthuan28@gmail.com",
                password: "123456Aa@",
                firstName: "Thuan",
                lastName: "Dao Nam",
                phoneNumber: "0333967968",
                gender: "MALE",
                role: "CUSTOMER",
                membership: "DIAMOND",
                birthday: new Date(2003, 3, 28).getTime(),
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                email: "customer1@gmail.com",
                password: "123456Aa@",
                firstName: "Trà",
                lastName: "Nguyễn Thị",
                phoneNumber: "0888888888",
                gender: "FEMALE",
                role: "CUSTOMER",
                membership: "GOLD",
                birthday: new Date(1999, 9, 9).getTime(),
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                email: "customer2@gmail.com",
                password: "123456Aa@",
                firstName: "Lâm",
                lastName: "Đặng Văn",
                phoneNumber: "0866666666",
                gender: "MALE",
                role: "CUSTOMER",
                membership: "PLATINUM",
                birthday: new Date(1999, 9, 9).getTime(),
                createdAt: new Date(),
                updatedAt: new Date(),
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
