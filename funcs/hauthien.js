let mapPlq = require('./map_phan_loai_que');

function hauThien(lastSixDigits) {
    let l = (lastSixDigits[4] === '0' ? '8' : (lastSixDigits[4] === '9' ? '1' : lastSixDigits[4]))
    let r = (lastSixDigits[5] === '0' ? '8' : (lastSixDigits[5] === '9' ? '1' : lastSixDigits[5]))

    return {
        left: l,
        right: r,
        rating: mapPlq.mapPhanLoaiQue[l + "/" + r],
    };
}

module.exports = { hauThien }
