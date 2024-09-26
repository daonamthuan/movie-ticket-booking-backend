"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert("Allcodes", [
            // gender
            {
                keyCode: "MALE",
                type: "GENDER",
                value: "Nam",
            },
            {
                keyCode: "FEMALE",
                type: "GENDER",
                value: "Nữ",
            },
            {
                keyCode: "OTHER",
                type: "GENDER",
                value: "Khác",
            },
            // role
            {
                keyCode: "ADMIN",
                type: "ROLE",
                value: "Quản trị viên",
            },
            {
                keyCode: "STAFF",
                type: "ROLE",
                value: "Nhân viên",
            },
            {
                keyCode: "CUSTOMER",
                type: "ROLE",
                value: "Khách hàng",
            },
            // membership
            {
                keyCode: "BRONZE",
                type: "MEMBERSHIP",
                value: "Đồng",
            },
            {
                keyCode: "SILVER",
                type: "MEMBERSHIP",
                value: "Bạc",
            },
            {
                keyCode: "GOLD",
                type: "MEMBERSHIP",
                value: "Vàng",
            },
            {
                keyCode: "DIAMOND",
                type: "MEMBERSHIP",
                value: "Kim Cương",
            },

            // room status
            {
                keyCode: "READY",
                type: "ROOM_STATUS",
                value: "Sẵn sàng",
            },
            {
                keyCode: "ACTIVE",
                type: "ROOM_STATUS",
                value: "Đang hoạt động",
            },

            // voucher status
            {
                keyCode: "UNUSED",
                type: "VOUCHER_STATUS",
                value: "Chưa sử dụng",
            },
            {
                keyCode: "USED",
                type: "VOUCHER_STATUS",
                value: "Đã sử dụng",
            },

            // age limit
            {
                keyCode: "P",
                type: "AGE_LIMIT",
                value: "Phim phổ biến với mọi độ tuổi",
            },
            {
                keyCode: "K",
                type: "AGE_LIMIT",
                value: "Phim được phổ biến đến người xem dưới 13 tuổi với điều kiện xem cùng cha, mẹ hoặc người giám hộ",
            },
            {
                keyCode: "T13",
                type: "AGE_LIMIT",
                value: "Phim phổ biến đến người xem từ đủ 13 tuổi trở lên",
            },
            {
                keyCode: "T16",
                type: "AGE_LIMIT",
                value: "Phim phổ biến đến người xem từ đủ 16 tuổi trở lên (16+)",
            },
            {
                keyCode: "T18",
                type: "AGE_LIMIT",
                value: "Phim phổ biến đến người xem từ đủ 18 tuổi trở lên (18+)",
            },

            // payment
            {
                keyCode: "CASH",
                type: "PAYMENT",
                value: "Tiền mặt",
            },
            {
                keyCode: "BANKING",
                type: "PAYMENT",
                value: "Chuyển khoản qua ngân hàng",
            },
            {
                keyCode: "MOMO",
                type: "PAYMENT",
                value: "Ví Momo",
            },
            {
                keyCode: "VNPAY",
                type: "PAYMENT",
                value: "Ví VN Pay",
            },

            // seat type
            {
                keyCode: "STANDARD",
                type: "SEAT_TYPE",
                value: "Ghế thường",
            },
            {
                keyCode: "COUPLE",
                type: "SEAT_TYPE",
                value: "Ghế đôi",
            },
            // seat price
            {
                keyCode: "STANDARD_PRICE",
                type: "SEAT_PRICE",
                value: "60000",
            },
            {
                keyCode: "COUPLE_PRICE",
                type: "SEAT_PRICE",
                value: "75000",
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
