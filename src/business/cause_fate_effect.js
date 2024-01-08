let mapHexagramType = require("./map_hexagram_type");
let mapCauseFateEffect = require("./map_cause_fate_effect");


// gieo que nhan
function sowCauseHexagram(phoneNumber) {
    let phoneNumberSubstring = phoneNumber.substring(0, 10);
    let firstPart = phoneNumberSubstring.substring(0, 5);
    let secondPart = phoneNumberSubstring.substring(5, 10);

    let sumFirstPart = [...firstPart].reduce((sum, digit) => sum + parseInt(digit), 0);
    let sumSecondPart = [...secondPart].reduce((sum, digit) => sum + parseInt(digit), 0);

    let fengShuiFirstPart = (sumFirstPart % 8 === 0) ? 8 : sumFirstPart % 8;
    let fengShuiSecondPart = (sumSecondPart % 8 === 0) ? 8 : sumSecondPart % 8;

    return {
        left: fengShuiFirstPart.toString(),
        right: fengShuiSecondPart.toString(),
        rating: mapHexagramType.mapHexagramType[fengShuiFirstPart.toString() + "/" + fengShuiSecondPart.toString()],
    }
}

// gieo que duyen-fate
function sowFateHexagram(causeValue) {
    let causeValueString = causeValue.left + "/" + causeValue.right
    let fate = mapCauseFateEffect.mapCauseFateEffect[causeValueString].fate
    let l = fate.slice(0, 1)
    let r = fate.slice(2, 3)

    return {
        left: l,
        right: r,
        rating: mapHexagramType.mapHexagramType[l + "/" + r],
    }
}

// gieo que qua-effect
function sowEffectHexagram(causeValue, phoneNumber) {
    let totalSumPhoneNumber = [...phoneNumber].reduce((sum, digit) => sum + parseInt(digit), 0);
    let phoneNumberVariable = (totalSumPhoneNumber % 6 === 0) ? 6 : totalSumPhoneNumber % 6;
    phoneNumberVariable = (phoneNumberVariable === 0) ? 6 : phoneNumberVariable;

    let causeValueString = causeValue.left + "/" + causeValue.right
    let effect = mapCauseFateEffect.mapCauseFateEffect[causeValueString].effect[phoneNumberVariable]
    let l = effect.slice(0, 1)
    let r = effect.slice(2, 3)

    return {
        left: l,
        right: r,
        rating: mapHexagramType.mapHexagramType[l + "/" + r],
    }
}


function decodingHexagram(causeValue) {
    let causeValueString = causeValue.left + "/" + causeValue.right
    let hex = mapCauseFateEffect.mapCauseFateEffect[causeValueString]

    return {
        name: hex.name,
        five_elements: hex.five_elements,
        mean: hex.mean,
    }
}


module.exports = {
    sowCauseHexagram,
    sowFateHexagram,
    sowEffectHexagram,
    decodingHexagram,
};
