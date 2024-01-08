
let mapHexagramType = require("./map_hexagram_type");

// gieo que hau thien
function gieoQueHauThien(lastSixDigits) {
    let l = (lastSixDigits[4] === '0' ? '8' : (lastSixDigits[4] === '9' ? '1' : lastSixDigits[4]))
    let r = (lastSixDigits[5] === '0' ? '8' : (lastSixDigits[5] === '9' ? '1' : lastSixDigits[5]))

    return {
        left: l,
        right: r,
        rating: mapHexagramType.mapHexagramType[l + "/" + r],
    };
}

module.exports = {
    gieoQueHauThien,
};
