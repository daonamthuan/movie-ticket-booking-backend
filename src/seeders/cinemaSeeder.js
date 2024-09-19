"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert("Cinemas", [
            {
                cinemaName: "Moonlight Gigamall",
                totalRooms: 6,
                address:
                    "Tầng 5, TTTM Gigamall - 242 Phạm Văn Đồng, Thành phố Thủ Đức, Hồ Chí Minh",
                hotline: "02567891011",
                image: "https://www.kansascity.com/latest-news/r1id5m/picture230738164/alternates/LANDSCAPE_1140/PRAIRIEFIRE_PRE_0516_2_1_QM2ABDKL_L55626411.jpg",
            },
            {
                cinemaName: "Moonlight Sư Vạn Hạnh",
                totalRooms: 6,
                address: "Tầng 6, Vạn Hạnh Mall - 11 Sư Vạn Hạnh, Phường 12, Quận 10, Hồ Chí Minh",
                hotline: "02562345678",
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
