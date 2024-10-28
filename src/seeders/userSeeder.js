"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert("Users", [
            {
                email: "admin@gmail.com",
                password: "$2a$10$TQtObSfvQSFgcvBemyidjOwi66UkExGP0hrDwFwMUL3b.jk7pn82W",
                firstName: "Văn A",
                lastName: "Nguyễn",
                phoneNumber: "0989999999",
                gender: "MALE",
                role: "ADMIN",
                membership: "SILVER",
                birthday: new Date(2000, 11, 27).getTime(),
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                email: "daonamthuan@gmail.com",
                password: "$2a$10$TQtObSfvQSFgcvBemyidjOwi66UkExGP0hrDwFwMUL3b.jk7pn82W",
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
                email: "customer@gmail.com",
                password: "$2a$10$TQtObSfvQSFgcvBemyidjOwi66UkExGP0hrDwFwMUL3b.jk7pn82W",
                firstName: "Trà",
                lastName: "Nguyễn Thị",
                phoneNumber: "0888888888",
                gender: "FEMALE",
                role: "CUSTOMER",
                membership: "GOLD",
                birthday: new Date(1999, 11, 9).getTime(),
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                email: "customer2@gmail.com",
                password: "$2a$10$TQtObSfvQSFgcvBemyidjOwi66UkExGP0hrDwFwMUL3b.jk7pn82W",
                firstName: "Lâm",
                lastName: "Đặng Văn",
                phoneNumber: "0866666666",
                gender: "MALE",
                role: "CUSTOMER",
                membership: "BRONZE",
                birthday: new Date(1999, 9, 9).getTime(),
                image: "",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                email: "nguyenvanan@gmail.com",
                password: "$2a$10$TQtObSfvQSFgcvBemyidjOwi66UkExGP0hrDwFwMUL3b.jk7pn82W",
                firstName: "An",
                lastName: "Nguyễn Văn",
                phoneNumber: "0987654321",
                gender: "MALE",
                role: "CUSTOMER",
                membership: "GOLD",
                birthday: "946684800000",
            },
            {
                email: "tranthibich@gmail.com",
                password: "$2a$10$TQtObSfvQSFgcvBemyidjOwi66UkExGP0hrDwFwMUL3b.jk7pn82W",
                firstName: "Bích",
                lastName: "Trần Thị",
                phoneNumber: "0912345678",
                gender: "FEMALE",
                role: "STAFF",
                membership: "SILVER",
                birthday: "978307200000",
            },
            {
                email: "lethichung@gmail.com",
                password: "$2a$10$TQtObSfvQSFgcvBemyidjOwi66UkExGP0hrDwFwMUL3b.jk7pn82W",
                firstName: "Chung",
                lastName: "Lê Thị",
                phoneNumber: "0908765432",
                gender: "FEMALE",
                role: "ADMIN",
                membership: "DIAMOND",
                birthday: "1009843200000",
            },
            {
                email: "phamvanddung@gmail.com",
                password: "$2a$10$TQtObSfvQSFgcvBemyidjOwi66UkExGP0hrDwFwMUL3b.jk7pn82W",
                firstName: "Dũng",
                lastName: "Phạm Văn",
                phoneNumber: "0934567890",
                gender: "MALE",
                role: "CUSTOMER",
                membership: "BRONZE",
                birthday: "1041379200000",
            },
            {
                email: "hoangthivinh@gmail.com",
                password: "$2a$10$TQtObSfvQSFgcvBemyidjOwi66UkExGP0hrDwFwMUL3b.jk7pn82W",
                firstName: "Vinh",
                lastName: "Hoàng Thị",
                phoneNumber: "0923456789",
                gender: "FEMALE",
                role: "STAFF",
                membership: "GOLD",
                birthday: "1072915200000",
            },
            {
                email: "doanvanhung@gmail.com",
                password: "$2a$10$TQtObSfvQSFgcvBemyidjOwi66UkExGP0hrDwFwMUL3b.jk7pn82W",
                firstName: "Hùng",
                lastName: "Đoàn Văn",
                phoneNumber: "0919876543",
                gender: "MALE",
                role: "ADMIN",
                membership: "SILVER",
                birthday: "1104537600000",
            },
            {
                email: "buitrig@gmail.com",
                password: "$2a$10$TQtObSfvQSFgcvBemyidjOwi66UkExGP0hrDwFwMUL3b.jk7pn82W",
                firstName: "Gia",
                lastName: "Bùi Trí",
                phoneNumber: "0901234567",
                gender: "OTHER",
                role: "CUSTOMER",
                membership: "DIAMOND",
                birthday: "1136073600000",
            },
            {
                email: "ngothihuong@gmail.com",
                password: "$2a$10$TQtObSfvQSFgcvBemyidjOwi66UkExGP0hrDwFwMUL3b.jk7pn82W",
                firstName: "Hương",
                lastName: "Ngô Thị ",
                phoneNumber: "0932109876",
                gender: "FEMALE",
                role: "STAFF",
                membership: "BRONZE",
                birthday: "1167609600000",
            },
            {
                email: "dangvanhoang@gmail.com",
                password: "$2a$10$TQtObSfvQSFgcvBemyidjOwi66UkExGP0hrDwFwMUL3b.jk7pn82W",
                firstName: "Hoàng",
                lastName: "Đặng Văn",
                phoneNumber: "0921098765",
                gender: "MALE",
                role: "ADMIN",
                membership: "GOLD",
                birthday: "1199145600000",
            },
            {
                email: "trinhthikim@gmail.com",
                password: "$2a$10$TQtObSfvQSFgcvBemyidjOwi66UkExGP0hrDwFwMUL3b.jk7pn82W",
                firstName: "Kim",
                lastName: "Trịnh Thị",
                phoneNumber: "0910987654",
                gender: "FEMALE",
                role: "CUSTOMER",
                membership: "SILVER",
                birthday: "1230768000000",
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
