"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert("Food_Menus", [
            {
                foodName: "Combo couple",
                price: 115000,
                description: "1 Bắp Ngọt 60oz + 2 Coke 32oz",
                image: "https://res.cloudinary.com/dquwkvuyh/image/upload/v1727720220/jpj6mtrxoytbmfh5v5kl.png",
            },
            {
                foodName: "Combo solo",
                price: 90000,
                description: "1 Bắp Ngọt 60oz + 1 Coke 32oz",
                image: "https://res.cloudinary.com/dquwkvuyh/image/upload/v1727720069/xdw1ly7mnk0duqyr27r8.png",
            },
            {
                foodName: "Combo party",
                price: 200000,
                description: "2 Bắp Ngọt 60oz + 4 Coke 22oz",
                image: "https://res.cloudinary.com/dquwkvuyh/image/upload/v1727720232/jh40byc2oqowus7ylpwy.png",
            },
            {
                foodName: "Fanta 32oz",
                price: 30000,
                description: "Hương vị cam thơm ngon kích thích",
                image: "https://res.cloudinary.com/dquwkvuyh/image/upload/v1727720173/tbtumyjcr8gtf2ig9t0o.jpg",
            },
            {
                foodName: "Sprite 32oz",
                price: 30000,
                description: "Vị sảng khoái tuyệt vời",
                image: "https://res.cloudinary.com/dquwkvuyh/image/upload/v1727720160/e528lc1zkpcykiqqh7cv.png",
            },
            {
                foodName: "Coke 32oz",
                price: 30000,
                description: "Vị nguyên bản kích thích vị giác",
                image: "https://res.cloudinary.com/dquwkvuyh/image/upload/v1727719987/zdolzbtrcgsokdmmdk4g.png",
            },
            {
                foodName: "Coke zero 32oz",
                price: 30000,
                description: "Không calo phù hợp với người ăn kiêng",
                image: "https://res.cloudinary.com/dquwkvuyh/image/upload/v1727720144/vn5ktrq3yhp5fqpawvm8.png",
            },
            {
                foodName: "Nước suối Dasani 500ml",
                price: 15000,
                description: "Đảm bảo sự thuần khiết trong từng giọt nước",
                image: "https://res.cloudinary.com/dquwkvuyh/image/upload/v1727720006/snobyfpgrzetngtepopd.png",
            },
            {
                foodName: "Khoai tây Lay's Stax 100g",
                price: 60000,
                description: "Sản phẩm được làm từ khoai tây tươi",
                image: "https://res.cloudinary.com/dquwkvuyh/image/upload/v1727719948/gpufscfsbteflr7wqkbr.png",
            },
            {
                foodName: "Khoai tây Lay's Stax 56g",
                price: 15000,
                description: "Sản phẩm được làm từ khoai tây tươi",
                image: "https://res.cloudinary.com/dquwkvuyh/image/upload/v1727719844/paldgopwexqos4ssulj5.png",
            },
            {
                foodName: "Poca khoai tây 54gr",
                price: 22000,
                description: "Sản phẩm được làm từ khoai tây tươi",
                image: "https://res.cloudinary.com/dquwkvuyh/image/upload/v1727720126/m9vtshuqw9opiwk0jmn9.png",
            },
            {
                foodName: "Snack Thái",
                price: 25000,
                description: "Bánh que Thái Lan có vị đậm đà, thơm ngon",
                image: "https://res.cloudinary.com/dquwkvuyh/image/upload/v1727720090/mjpfskvli2wdlpkogiok.png",
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
