"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert("Cinemas", [
            {
                cinemaName: "FastCine Gigamall",
                totalRooms: 6,
                address:
                    "Tầng 5, TTTM Gigamall - 242 Phạm Văn Đồng, Thành phố Thủ Đức, Hồ Chí Minh",
                hotline: "02567891011",
                image: "https://res.cloudinary.com/dquwkvuyh/image/upload/v1727930809/p1nhsffuhzepoc5ptteg.jpg",
            },
            {
                cinemaName: "FastCine Sư Vạn Hạnh",
                totalRooms: 8,
                address: "Tầng 6, Vạn Hạnh Mall - 11 Sư Vạn Hạnh, Phường 12, Quận 10, Hồ Chí Minh",
                hotline: "02562345678",
                image: "https://res.cloudinary.com/dquwkvuyh/image/upload/v1727931398/cphxqpwezojhpcc73ox4.png",
            },
            {
                cinemaName: "FastCine Đồng Khởi",
                totalRooms: 6,
                address: "Tầng 5, Parkson Đồng Khởi - 45 Đ. Lê Thánh Tôn, Quận 1, TP. Hồ Chí Minh",
                hotline: "02563456789",
                image: "https://res.cloudinary.com/dquwkvuyh/image/upload/v1727932271/eiemrenufgyy6n4gcn9f.jpg",
            },
            {
                cinemaName: "FastCine Thảo Điền",
                totalRooms: 8,
                address: "12 Đ. Quốc Hương, Thảo Điền, Quận 2, Hồ Chí Minh",
                hotline: "02565678910",
                image: "https://res.cloudinary.com/dquwkvuyh/image/upload/v1729881806/phcp0ch2qtqnqf2dk9kk.jpg",
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
