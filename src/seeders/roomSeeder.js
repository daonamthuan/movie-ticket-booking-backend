"use strict";

const seatMap1 =
    "[[0,0,1,1,1,1,1,1,1,1,1,1,0,1,1],[0,0,1,1,1,1,1,1,1,1,1,1,0,1,1],[0,0,1,1,1,1,1,1,1,1,1,1,0,1,1],[0,0,1,1,1,1,1,1,1,1,1,1,0,1,1],[0,0,1,1,1,1,1,1,1,1,1,1,0,1,1],[0,0,1,1,1,1,1,1,1,1,1,1,0,1,1],[0,0,1,1,1,1,1,1,1,1,1,1,0,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,0,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,0,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,0,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,0,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,0,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,0,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,0,1,1],[2,2,2,2,2,2,2,2,2,2,2,2,0,2,2]]";

const seatMap2 =
    "[[1,1,0,0,1,1,1,1,1,1,1,1],[1,1,0,0,1,1,1,1,1,1,1,1],[1,1,0,0,1,1,1,1,1,1,1,1],[1,1,0,0,1,1,1,1,1,1,1,1],[1,1,0,0,1,1,1,1,1,1,1,1],[1,1,0,0,1,1,1,1,1,1,1,1],[1,1,0,0,1,1,1,1,1,1,1,1],[1,1,0,0,1,1,1,1,1,1,1,1],[1,1,0,0,1,1,1,1,1,1,1,1],[2,2,2,2,2,2,2,2,2,2,2,2]]";
const seatMap3 =
    "[[1,1,1,1,1,1,1,1,1,1,0,0],[1,1,1,1,1,1,1,1,1,1,0,0],[1,1,1,1,1,1,1,1,1,1,0,0],[1,1,1,1,1,1,1,1,1,1,0,0],[1,1,1,1,1,1,1,1,1,1,0,0],[1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1],[2,2,2,2,2,2,2,2,2,2,2,2]]";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert("Rooms", [
            {
                cinemaId: 1,
                roomName: "Rạp 1",
                totalSeats: 120,
                note: "",
                seatMap: seatMap1,
            },
            {
                cinemaId: 1,
                roomName: "Rạp 2",
                totalSeats: 120,
                note: "",
                seatMap: seatMap2,
            },
            {
                cinemaId: 1,
                roomName: "Rạp 3",
                totalSeats: 120,
                note: "",
                seatMap: seatMap3,
            },
            {
                cinemaId: 1,
                roomName: "Rạp 4",
                totalSeats: 120,
                note: "",
                seatMap: seatMap2,
            },
            {
                cinemaId: 2,
                roomName: "Rạp Cầu Vồng",
                totalSeats: 120,
                note: "",
                seatMap: seatMap3,
            },
            {
                cinemaId: 2,
                roomName: "Rạp Ngôi Sao",
                totalSeats: 120,
                note: "",
                seatMap: seatMap1,
            },
            {
                cinemaId: 2,
                roomName: "Rạp Mặt Trăng",
                totalSeats: 120,
                note: "",
                seatMap: seatMap2,
            },
            {
                cinemaId: 2,
                roomName: "Rạp Bầu Trời",
                totalSeats: 120,
                note: "",
                seatMap: seatMap3,
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
