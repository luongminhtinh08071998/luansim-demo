let mapHexagramType = require("./map_hexagram_type");

let mapBinCode = {
    "111": "1",
    "011": "2",
    "101": "3",
    "001": "4",
    "110": "5",
    "010": "6",
    "100": "7",
    "000": "8",
}

// gieo que than menh
function gieoQueThanMenh(lastSixDigits) {
    let sixDigits = "";
    for (let i = lastSixDigits.length - 1; i >= 0; i--) {
        sixDigits += lastSixDigits[i];
    }

    let binCode = findBinCode(sixDigits)
    let l = binCode.slice(0, 3)
    let r = binCode.slice(3, 6)

    return {
        left: mapBinCode[l],
        right: mapBinCode[r],
        rating: mapHexagramType.mapHexagramType[mapBinCode[l] + "/" + mapBinCode[r]],
    }
}

function findBinCode(sixDigits) {
    let binCode = "";
    for (let i = 0; i < sixDigits.length; i++) {
        binCode += (parseInt(sixDigits[i], 10) % 2).toString();
    }
    return binCode;
}


module.exports = {
    gieoQueThanMenh,
};

