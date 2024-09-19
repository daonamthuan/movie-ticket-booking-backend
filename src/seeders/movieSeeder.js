"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert("Movies", [
            {
                movieName: "TRANSFORMERS ONE: MỘT",
                category: "Khoa học viễn tưởng",
                duration: 104,
                directors: "Josh Cooley",
                actors: "Scarlett Johansson, Chris Hemsworth",
                ageLimit: "T16",
                releaseDate: new Date().getTime(),
                movieFormat: "2D",
                audioType: "Phụ đề/Lồng tiếng",
                description:
                    "Câu chuyện về nguồn gốc chưa được kể của Optimus Prime và Megatron, được biết đến nhiều hơn như những kẻ thù không đội trời chung, nhưng từng là bạn bè gắn bó như anh em, những người đã thay đổi số phận của Cybertron mãi mãi.",
                thumbnail:
                    "https://bhdstar.vn/wp-content/uploads/2024/09/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp-13.jpg",
                trailer: "https://youtu.be/WLqCKr2h1BI?si=yqD50XKKhGUDGK6H",
            },
            {
                movieName: "THE DESPERATE CHASE: ANH TRAI VƯỢT MỌI TAM TAI",
                category: "Hành động",
                duration: 96,
                directors: "Kim Jae-hoon",
                actors: "Park Sung-Woong, Yoon Kyung-ho",
                ageLimit: "T16",
                releaseDate: new Date().getTime(),
                movieFormat: "2D",
                audioType: "Phụ đề",
                description:
                    "Một thám tử hợp tác với một kẻ lừa đảo lão luyện trong việc cải trang để hạ gục một tổ chức tội phạm hùng mạnh. Liên minh bất ngờ của họ phải đối mặt với những thách thức khi họ điều hướng thế giới ngầm nguy hiểm, khám phá bí mật và đối đầu với mafia.",
                thumbnail:
                    "https://bhdstar.vn/wp-content/uploads/2024/09/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp-8.jpg",
                trailer: "https://youtu.be/xUTVWCNaS-U?si=l6stMwquD5pEhIrC",
            },
            {
                movieName: "GRACIE AND PEDRO: BÁO THỦ ĐI TÌM CHỦ",
                category: "Hoạt hình",
                duration: 96,
                directors: "Kevin Denovan, Gottfried Roodt",
                actors: "Danny Trejo, Bill Nighy",
                ageLimit: "K",
                releaseDate: new Date().getTime(),
                movieFormat: "2D",
                audioType: "Phụ đề/Lồng tiếng",
                description:
                    "Thú cưng Gracie và Pedro bị lạc chủ trong quá trình di chuyển. Họ phải đối mặt với nhiều thử thách, được hỗ trợ bởi bài hát lan truyền của chủ, gặp gỡ nhiều nhân vật cho đến khi đoàn tụ với Sophie và Gavin, tìm đường về nhà.",
                thumbnail:
                    "https://bhdstar.vn/wp-content/uploads/2024/09/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp.png",
                trailer: "https://youtu.be/mBvrpYQVMso?si=QRIPeHmdMdrbi-b3",
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
