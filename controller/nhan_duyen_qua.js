

function nhan(phoneNumber) {
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
        rating: mapPhanLoaiQue[fengShuiFirstPart.toString() + "/" + fengShuiSecondPart.toString()],
    }
}

function duyen(nhanValue) {
    let nhanValueString = nhanValue.left + "/" + nhanValue.right
    let duyen = mapCauseFateEffect[nhanValueString].fate
    let l = duyen.slice(0, 1)
    let r = duyen.slice(2, 3)

    return {
        left: l,
        right: r,
        rating: mapPhanLoaiQue[l + "/" + r],
    }
}

function qua(nhanValue, phoneNumber) {
    let totalSumPhoneNumber = [...phoneNumber].reduce((sum, digit) => sum + parseInt(digit), 0);
    let phoneNumberVariable = (totalSumPhoneNumber % 6 === 0) ? 6 : totalSumPhoneNumber % 6;
    phoneNumberVariable = (phoneNumberVariable === 0) ? 6 : phoneNumberVariable;

    let nhanValueString = nhanValue.left + "/" + nhanValue.right
    let qua = mapCauseFateEffect[nhanValueString].effect[phoneNumberVariable]
    let l = qua.slice(0, 1)
    let r = qua.slice(2, 3)

    return {
        left: l,
        right: r,
        rating: mapPhanLoaiQue[l + "/" + r],
    }
}


function danhGiaNhanDuyenQua(nhanValue) {
    let nhanValueString = nhanValue.left + "/" + nhanValue.right
    let que = mapCauseFateEffect[nhanValueString]

    return {
        name: que.name,
        five_elements: que.five_elements,
        mean: que.mean,
    }
}
