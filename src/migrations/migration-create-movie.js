"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Movies", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            movieName: {
                type: Sequelize.STRING,
            },
            category: {
                type: Sequelize.STRING,
            },
            duration: {
                type: Sequelize.INTEGER,
            },
            directors: {
                type: Sequelize.STRING,
            },
            actors: {
                type: Sequelize.STRING,
            },
            ageLimit: {
                type: Sequelize.STRING,
            },
            releaseDate: {
                type: Sequelize.BIGINT,
            },
            movieFormat: {
                type: Sequelize.STRING,
            },
            audioType: {
                type: Sequelize.STRING,
            },
            description: {
                type: Sequelize.STRING,
            },
            thumbnail: {
                type: Sequelize.STRING,
            },
            trailer: {
                type: Sequelize.STRING,
            },

            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Movies");
    },
};
