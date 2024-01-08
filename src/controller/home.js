const sow_hexagram = require("../business/sow_hexagram");
const compiledTemplate = require("./../view/index.hbs");


module.exports = {
  home: function (req, res) {
    let phoneNumber = req.phoneNumber;
    phoneNumber = "0399595500"
    let rs = sow_hexagram.sowHexagram(phoneNumber);
    var result = compiledTemplate(rs);

    return res.send(result)
  },

};
