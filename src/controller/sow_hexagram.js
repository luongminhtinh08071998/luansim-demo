const sow_hexagram = require("../business/sow_hexagram");


module.exports = {
  sow_hexagram: function (req, res) {
    let phoneNumber = req.body.phoneNumber;
    const phonePattern = /^[0-9]{10}$/;
    if (!phoneNumber.match(phonePattern)) {
      return res.render('home', { err_msg: "Số điện thoại không hợp lệ. Xin vui lòng nhập 10 chữ số." });
    }

    let hex = sow_hexagram.sowHexagram(phoneNumber);
 
    return res.render('sow_hexagram', { hex });
  },

};

