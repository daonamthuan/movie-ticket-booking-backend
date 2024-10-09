"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert("Schedules", [
            {
                roomId: 1,
                movieId: 1,
                startTime: new Date().setHours(17, 0, 0, 0),
                endTime: new Date().setHours(18, 45, 0, 0),
            },
            {
                roomId: 2,
                movieId: 1,
                startTime: new Date().setHours(17, 40, 0, 0),
                endTime: new Date().setHours(19, 25, 0, 0),
            },
            {
                roomId: 3,
                movieId: 1,
                startTime: new Date().setHours(18, 20, 0, 0),
                endTime: new Date().setHours(20, 5, 0, 0),
            },
            {
                roomId: 1,
                movieId: 1,
                startTime: new Date().setHours(19, 0, 0, 0),
                endTime: new Date().setHours(20, 45, 0, 0),
            },

            {
                roomId: 2,
                movieId: 2,
                startTime: new Date().setHours(19, 40, 0, 0),
                endTime: new Date().setHours(21, 15, 0, 0),
            },
            {
                roomId: 4,
                movieId: 3,
                startTime: new Date().setHours(19, 35, 0, 0),
                endTime: new Date().setHours(21, 0, 0, 0),
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
