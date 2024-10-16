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
                audioType: "dubbed",
                description:
                    "Câu chuyện về nguồn gốc chưa được kể của Optimus Prime và Megatron, được biết đến nhiều hơn như những kẻ thù không đội trời chung, nhưng từng là bạn bè gắn bó như anh em, những người đã thay đổi số phận của Cybertron mãi mãi.",
                image: "https://res.cloudinary.com/dquwkvuyh/image/upload/v1727708730/qtug6uqx1khipzv6pwur.jpg",
                trailer: "https://www.youtube.com/watch?v=WLqCKr2h1BI",
                status: "now-showing",
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
                audioType: "subtitled",
                description:
                    "Một thám tử hợp tác với một kẻ lừa đảo lão luyện trong việc cải trang để hạ gục một tổ chức tội phạm hùng mạnh. Liên minh bất ngờ của họ phải đối mặt với những thách thức khi họ điều hướng thế giới ngầm nguy hiểm, khám phá bí mật và đối đầu với mafia.",
                image: "https://res.cloudinary.com/dquwkvuyh/image/upload/v1727708790/omhsediry8v3oh0b3zy0.jpg",
                trailer: "https://www.youtube.com/watch?v=hBbndPyAPeg",
                status: "now-showing",
            },
            {
                movieName: "GRACIE AND PEDRO: BÁO THỦ ĐI TÌM CHỦ",
                category: "Hoạt hình",
                duration: 96,
                directors: "Kevin Denovan, Gottfried Roodt",
                actors: "Danny Trejo, Bill Nighy",
                ageLimit: "K",
                releaseDate: new Date("2024-9-13").getTime(),
                movieFormat: "2D",
                audioType: "subtitled",
                description:
                    "Thú cưng Gracie và Pedro bị lạc chủ trong quá trình di chuyển. Họ phải đối mặt với nhiều thử thách, được hỗ trợ bởi bài hát lan truyền của chủ, gặp gỡ nhiều nhân vật cho đến khi đoàn tụ với Sophie và Gavin, tìm đường về nhà.",
                image: "https://res.cloudinary.com/dquwkvuyh/image/upload/v1727708851/v8ykikixhtus6xvtgwqn.png",
                trailer: "https://www.youtube.com/watch?v=MzJ8z_DDYYI",
                status: "now-showing",
            },
            {
                movieName: "GRAVE OF THE FIREFLIES: MỘ ĐOM ĐÓM",
                category: "Hoạt hình, Kịch",
                duration: 88,
                directors: "Isao Takahata",
                actors: "Tsutomu Tatsumi, Ayano Shiraishi",
                ageLimit: "T13",
                releaseDate: new Date("2024-10-4").getTime(),
                movieFormat: "2D",
                audioType: "both",
                description:
                    "Bộ phim được đặt trong bối cảnh giai đoạn cuối chiến tranh thế giới thứ 2 ở Nhật, kể về câu chuyện cảm động về tình anh em của hai đứa trẻ mồ côi là Seita và Setsuko. Hai anh em mất mẹ trong một trận bom dữ dội của không quân Mỹ khi cha của chúng đang chiến đấu cho Hải quân Nhật. Hai đứa bé phải vật lộn giữa nạn đói, giữa sự thờ ơ của những người xung quanh (trong đó có cả người cô họ của mình)... Bi kịch thấm đẫm nước mắt.",
                image: "https://res.cloudinary.com/dquwkvuyh/image/upload/v1727708935/rxt8otrka5zbuv1u1efg.jpg",
                trailer: "https://www.youtube.com/watch?v=HgDzVFMi238",
                status: "now-showing",
            },
            {
                movieName: "VENOM - KÈO CUỐI",
                category: "Hành động, Khoa học, viễn tưởng",
                duration: 120,
                directors: "Kelly Marcel",
                actors: "Tom Hardy, Juno Temple, Chiwetel Ejiofor, Clark Backo, Stephen Graham",
                ageLimit: "T18",
                releaseDate: new Date("2024-10-25").getTime(),
                movieFormat: "2D",
                audioType: "subtitled",
                description:
                    "Tom Hardy sẽ tái xuất trong bom tấn Venom: The Last Dance (Tựa Việt: Venom: Kèo Cuối) và phải đối mặt với kẻ thù lớn nhất từ trước đến nay - toàn bộ chủng tộc Symbiote Venom: Kèo cuối - Dự kiến khởi chiếu 25.10.2024",
                image: "https://res.cloudinary.com/dquwkvuyh/image/upload/v1727708469/uzqqol23goiv12zhyyxm.png",
                trailer: "https://www.youtube.com/watch?v=I1q-jmvPNn0",
                status: "coming-soon",
            },
            {
                movieName: "NGÀY XƯA CÓ MỘT CHUYỆN TÌNH",
                category: "Tình cảm",
                duration: 120,
                directors: "Trịnh Đình Lê Minh",
                actors: "Avin Lu, Ngọc Xuân, Đỗ Nhật Hoàng, Thanh Tú, Bảo Tiên, Hạo Khang",
                ageLimit: "T16",
                releaseDate: new Date("2024-11-1").getTime(),
                movieFormat: "2D",
                audioType: "subtitled",
                description:
                    "Ngày xưa có một chuyện tình kể về tình bạn, tình yêu giữa hai chàng trai và một cô gái từ thuở ấu thơ cho đến khi trưởng thành, trước những thử thách của số phận. Bộ ba Phúc, Vinh, Miền - theo như lời của chính nhà văn Nguyễn Nhật Ánh - đã đi đến tận cùng của một chuyện tình.",
                image: "https://res.cloudinary.com/dquwkvuyh/image/upload/v1727709072/kmozisyhmb3afqzirt8s.png",
                trailer: "https://www.youtube.com/watch?v=Not4hIJxwpw",
                status: "coming-soon",
            },
            {
                movieName: "TEE YOD: QUỶ ĂN TẠNG PHẦN 2",
                category: "Kinh dị",
                duration: 111,
                directors: "Taweewat Wantha",
                actors: "Nadech Kugimiya, Denise Jelilcha Kapaun, Mim Rattawadee Wongthong, Junior Kajbhunditt Jaidee",
                ageLimit: "T18",
                releaseDate: new Date("2024-10-18").getTime(),
                movieFormat: "2D",
                audioType: "subtitled",
                description:
                    "Ba năm sau cái chết của Yam, Yak vẫn tiếp tục săn lùng linh hồn bí ẩn mặc áo choàng đen. Gặp một cô gái có triệu chứng giống Yam, Yak phát hiện ra người bảo vệ linh hồn, pháp sư ẩn dật Puang, sống trong một khu rừng đầy nguy hiểm. Giữa những phép thuật ma quỷ và những sinh vật nguy hiểm. Khi họ đuổi theo linh hồn mặc áo choàng đen, tiếng kêu đầy ám ảnh của Tee Yod sắp quay trở lại một lần nữa...",
                image: "https://res.cloudinary.com/dquwkvuyh/image/upload/v1727709333/f6lwsuk21nlsbximchdp.png",
                trailer: "https://www.youtube.com/watch?v=xVVZvSybaEc",
                status: "coming-soon",
            },
            {
                movieName: "ELLI VÀ BÍ ẨN CHIẾC TÀU MA",
                category: "Gia đình, Hoạt hình",
                duration: 87,
                directors: "Piet De Rycker, Jesper Møller, Jens Møller",
                actors: "Dalia Schmidt-Foß, Oliver Kalkofe, Santiago Ziesmer",
                ageLimit: "K",
                releaseDate: new Date("2024-10-25").getTime(),
                movieFormat: "2D",
                audioType: "both",
                description:
                    'Khi một hồn ma nhỏ vô gia cư gõ cửa nhà những cư dân lập dị của một Chuyến tàu ma để tìm kiếm một nơi để thuộc về, cô vô tình thu hút sự chú ý từ "thế giới bên ngoài" và phải hợp tác với phi hành đoàn quái vật hỗn tạp trong một nhiệm vụ điên rồ để cứu không chỉ tương lai của Chuyến tàu ma mà còn là cơ hội duy nhất để cuối cùng có một gia đình của riêng mình.',
                image: "https://res.cloudinary.com/dquwkvuyh/image/upload/v1727710479/da4bknyyira6imsnw7o5.png",
                trailer: "https://www.youtube.com/watch?v=9tDZpBbg8Ow",
                status: "coming-soon",
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
