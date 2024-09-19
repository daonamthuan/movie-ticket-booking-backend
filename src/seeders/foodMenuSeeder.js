"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert("Food_Menus", [
            {
                foodName: "Combo couple",
                price: 115000,
                description: "1 Bắp Ngọt 60oz + 2 Coke 32oz",
                image: "",
            },
            {
                foodName: "Combo solo",
                price: 90000,
                description: "1 Bắp Ngọt 60oz + 1 Coke 32oz",
                image: "",
            },
            {
                foodName: "Combo party",
                price: 200000,
                description: "2 Bắp Ngọt 60oz + 4 Coke 22oz",
                image: "",
            },
            {
                foodName: "Fanta 32oz",
                price: 30000,
                description: "",
                image: "",
            },
            {
                foodName: "Sprite 32oz",
                price: 30000,
                description: "",
                image: "",
            },
            {
                foodName: "Coke 32oz",
                price: 30000,
                description: "",
                image: "",
            },
            {
                foodName: "Coke zero 32oz",
                price: 30000,
                description: "",
                image: "",
            },
            {
                foodName: "Nước suối Aquafina 500ml",
                price: 15000,
                description: "",
                image: "",
            },
            {
                foodName: "Khoai tây Lay's Stax 100g",
                price: 60000,
                description: "",
                image: "",
            },
            {
                foodName: "Poca khoai tây 54gr",
                price: 22000,
                description: "",
                image: "",
            },
            {
                foodName: "Snack Thái",
                price: 25000,
                description: "",
                image: "",
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
