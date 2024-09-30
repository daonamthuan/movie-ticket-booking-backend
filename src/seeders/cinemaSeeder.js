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
                image: "https://www.kansascity.com/latest-news/r1id5m/picture230738164/alternates/LANDSCAPE_1140/PRAIRIEFIRE_PRE_0516_2_1_QM2ABDKL_L55626411.jpg",
            },
            {
                cinemaName: "FastCine Sư Vạn Hạnh",
                totalRooms: 8,
                address: "Tầng 6, Vạn Hạnh Mall - 11 Sư Vạn Hạnh, Phường 12, Quận 10, Hồ Chí Minh",
                hotline: "02562345678",
                image: "https://ca-times.brightspotcdn.com/dims4/default/27db8b4/2147483647/strip/true/crop/1170x780+0+48/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F06%2F84%2F88495353418284e1e9ded141b26b%2Fet-27-best-movie-theaters-starlight-cinemas-071.jpg",
            },
            {
                cinemaName: "FastCine Đồng Khởi",
                totalRooms: 6,
                address: "Tầng 5, Parkson Đồng Khởi - 45 Đ. Lê Thánh Tôn, Quận 1, TP. Hồ Chí Minh",
                hotline: "02563456789",
                image: "https://ca-times.brightspotcdn.com/dims4/default/27db8b4/2147483647/strip/true/crop/1170x780+0+48/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F06%2F84%2F88495353418284e1e9ded141b26b%2Fet-27-best-movie-theaters-starlight-cinemas-071.jpg",
            },
            {
                cinemaName: "FastCine Thảo Điền",
                totalRooms: 8,
                address: "12 Đ. Quốc Hương, Thảo Điền, Quận 2, Hồ Chí Minh",
                hotline: "02565678910",
                image: "https://ca-times.brightspotcdn.com/dims4/default/27db8b4/2147483647/strip/true/crop/1170x780+0+48/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F06%2F84%2F88495353418284e1e9ded141b26b%2Fet-27-best-movie-theaters-starlight-cinemas-071.jpg",
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
