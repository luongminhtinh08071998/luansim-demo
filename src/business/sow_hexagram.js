const thanmenh = require("./thanmenh");
const cause_fate_effect = require("./cause_fate_effect");
const tienthien = require("./tienthien");
const trungthien = require("./trungthien");
const hauthien = require("./hauthien");

function sowHexagram(phoneNumber) {
     let lastSixDigits = phoneNumber.slice(-6);
     let tmCode = thanmenh.gieoQueThanMenh(lastSixDigits)
     let cause = cause_fate_effect.sowCauseHexagram(phoneNumber)
     let fate = cause_fate_effect.sowFateHexagram(cause)
     let effect = cause_fate_effect.sowEffectHexagram(cause, phoneNumber)
     let tienCode = tienthien.gieoQueTienThien(lastSixDigits)
     let trungCode = trungthien.gieoQueTrungThien(lastSixDigits)
     let hauCode = hauthien.gieoQueHauThien(lastSixDigits)
     let decryption = cause_fate_effect.decodingHexagram(cause)

     return {
          than_menh: tmCode,
          cause: cause,
          fate: fate,
          effect: effect,
          tien_thien: tienCode,
          trung_thien: trungCode,
          hau_thien: hauCode,
          decryption: decryption,
     }

}

module.exports = {
     sowHexagram,
};

