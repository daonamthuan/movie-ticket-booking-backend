"use strict";

const seatMap = Array.from({ length: 10 }, () => Array.from({ length: 12 }, () => 1));

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert("Rooms", [
            {
                cinemaId: 1,
                roomName: "Rạp 1",
                totalSeats: 120,
                note: "",
                seatMap: JSON.stringify(seatMap),
            },
            {
                cinemaId: 1,
                roomName: "Rạp 2",
                totalSeats: 120,
                note: "",
                seatMap: JSON.stringify(seatMap),
            },
            {
                cinemaId: 1,
                roomName: "Rạp 3",
                totalSeats: 120,
                note: "",
                seatMap: JSON.stringify(seatMap),
            },
            {
                cinemaId: 1,
                roomName: "Rạp 4",
                totalSeats: 120,
                note: "",
                seatMap: JSON.stringify(seatMap),
            },
            {
                cinemaId: 2,
                roomName: "Rạp Cầu Vồng",
                totalSeats: 120,
                note: "",
                seatMap: JSON.stringify(seatMap),
            },
            {
                cinemaId: 2,
                roomName: "Rạp Ngôi Sao",
                totalSeats: 120,
                note: "",
                seatMap: JSON.stringify(seatMap),
            },
            {
                cinemaId: 2,
                roomName: "Rạp Mặt Trăng",
                totalSeats: 120,
                note: "",
                seatMap: JSON.stringify(seatMap),
            },
            {
                cinemaId: 2,
                roomName: "Rạp Bầu Trời",
                totalSeats: 120,
                note: "",
                seatMap: JSON.stringify(seatMap),
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
