const sow_hexagram = require("../business/sow_hexagram");


module.exports = {
  sow_hexagram: function (req, res) {
    let phoneNumber = req.body.phoneNumber;
    const phonePattern = /^[0-9]{10}$/;
    if (!phoneNumber.match(phonePattern)) {
      return res.render('home', { err_msg: "Số điện thoại không hợp lệ. Xin vui lòng nhập 10 chữ số." });
    }

    let rs = sow_hexagram.sowHexagram(phoneNumber);
    return res.render('sow_hexagram', { rs: rs });
  },

};

// {
//   than_menh: {
//     left: "4",
//     right: "1",
//     rating: "RT",
//   },
//   cause: {
//     left: "2",
//     right: "3",
//     rating: "T",
//   },
//   fate: {
//     left: "1",
//     right: "5",
//     rating: "X",
//   },
//   effect: {
//     left: "2",
//     right: "4",
//     rating: "T",
//   },
//   tien_thien: {
//     left: "5",
//     right: "1",
//     rating: "X",
//   },
//   trung_thien: {
//     left: "5",
//     right: "5",
//     rating: "T",
//   },
//   hau_thien: {
//     left: "8",
//     right: "8",
//     rating: "T",
//   },
//   decryption: {
//     name: "Trạch Hỏa Cách",
//     five_elements: "Kim - Hỏa",
//     mean: "Cải cách, biến đổi, cuộc cách mạng.",
//   },
// }

