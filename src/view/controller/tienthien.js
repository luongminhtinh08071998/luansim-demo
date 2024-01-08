function tienThien(lastSixDigits) {
    let l = (lastSixDigits[0] === '0' ? '8' : (lastSixDigits[0] === '9' ? '1' : lastSixDigits[0]))
    let r = (lastSixDigits[1] === '0' ? '8' : (lastSixDigits[1] === '9' ? '1' : lastSixDigits[1]))

    return {
        left: l,
        right: r,
        rating: mapPhanLoaiQue[l + "/" + r],
    };
}

