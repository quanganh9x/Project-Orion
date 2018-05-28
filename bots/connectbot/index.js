// dominate the worlds //
// devours my hunger, fill my soul //
// the end, is near //
const random = require('./random');

module.exports = (bot) => {
    bot.hear(['chat', 'connect'], (payload, chat) => {
        chat.conversation((convo) => {
            convo.say("[ConnectBOT] v1.0 xin chào mừng!").then(() => {
                const connectbot = (convo) => {
                    convo.ask({
                        text: 'Bạn muốn gặp gỡ những người mới ? Hãy để ConnectBOT giúp bạn nào!',
                        buttons: [
                            { type: 'postback', title: 'Random', payload: 'CONNECT_RANDOM' },
                            { type: 'postback', title: 'Meetups', payload: 'CONNECT_MEETUPS' },
                            { type: 'postback', title: 'Advisory', payload: 'CONNECT_ADVISORY' }
                        ]
                    }, (payload, convo) => {
                        (async () => {
                                switch (payload.message.text) {
                                    case 'Random':
                                        await random.start(convo, bot);
                                        break;
                                    case 'Meetups':
                                        break;
                                    case 'Advisory':
                                        break;
                                    case 'Connect':
                                        break;
                                    case 'end':
                                        await random.optout(convo);
                                        break;
                                    case 'whereami':
                                        convo.say("Main > ConnectBOT");
                                        break;
                                    default:
                                        await convo.say("Không có tuỳ chọn này :( Ý bạn là \'Random\', \'Meetups\' hoặc \'Advisory\' ?");
                                        break;
                                }
                                connectbot(convo);
                        })();
                    });
                };
                connectbot(convo);
            });
        });
    });
};

// Luôn bên em là tôi... lâu nay không chút thay đổi...
// Thế nhưng bây giờ em muốn chia tay vì: Tôi vẫn còn trẻ con
// Babe! Kajima! Stay here with me! Kajima!
//     Hụt hẫng...
// Gạt nước mắt nhớ ngày buồn nhất...
//
// Không muốn ai thay mình chăm sóc em những ngày tới!
//     Thoáng nghĩ đã đau lòng nhưng trách ai đây ngoài tôi...
// Em bước đi nhẹ nhàng... (Em đang xa tôi nhẹ nhàng)
// Nhưng trong anh bão tố! (Giấu hết bão tố trong tim)
//
// (Chorus)
// Nghẹn câu: "Em đừng đi nữa..."
// Nhưng tại môi mím chặt chẳng thể một lần nói ra...
// Chẳng ai có thể chỉ một ngày mà tốt hơn
// Chẳng lầm lỗi nào chỉ một giây mà xóa mờ
// Mình không thể lâu dài, chỉ vì tôi ngây ngô!
//     (Ngốc nghếch nên tình thơ mới chết
// Vô vọng trong bóng tối mình tôi)
//
// Thời gian sẽ minh chứng tất cả
// Và cũng có thể ngoảnh đi bỏ mặc chúng ta..
//     Ngón tay ấy buông xuôi vì chẳng cần tôi ở bên
// Đã từ chối cơ hội để đợi tôi vững vàng
// Ngồi khóc giữa cơn mưa, mới thấu đâu là..
//     Chạm Đáy của Nỗi Đau...
//
// (Giang tấu)
// Ngày cuối ở bên
// Môi tôi không thể nuôi can đảm để thốt lên
// Rời xa vòng tay
// Em cho tôi cảm giác nhung nhớ đến thế nào
// Từ biệt chưa nói câu chào mà sao muốn bước đi vội?
//     Mới có nhau thôi lại xóa hết những yêu thương rồi?
//
//     Bàn tay tôi nắm chặt
// Ngước lên bầu Trời để nước mắt không tuôn rơi
// Người là ánh sáng dẫn tôi tìm những giấc mơ
// Giờ phía trước mịt mù trong bóng tối
// Nỗi sợ I'm losing you...
//
// (Ver 2)
// Babe! Kajima! Stay here with me! Kajima!
//     Hụt hẫng...
// Gạt nước mắt nhớ ngày buồn nhất...
// Từ sâu trong lòng
// Không muốn ai thay mình chăm sóc em những ngày tới!
//     Thoáng nghĩ đã đau lòng nhưng trách ai đây ngoài tôi...
// Em bước đi nhẹ nhàng... (Em đang xa tôi nhẹ nhàng)
// Nhưng trong anh bão tố! (Giấu hết bão tố trong tim)
//
//
// (Chorus cuối)
// Babe! Babe! Kajima!
//     Babe! Kajima!
//     Mình không thể lâu dài, chỉ vì tôi ngây ngô!
//
//     Thời gian sẽ minh chứng tất cả
// Và cũng có thể ngoảnh đi bỏ mặc chúng ta..
//     Ngón tay ấy buông xuôi vì chẳng cần tôi ở bên
// Đã từ chối cơ hội để đợi tôi vững vàng
// Ngồi khóc giữa cơn mưa, mới thấu đâu là..
//     Chạm Đáy của Nỗi Đau...
//
// Không muốn ai thay mình chăm sóc em những ngày tới!
//     Thoáng nghĩ đã đau lòng nhưng trách ai đây ngoài tôi...