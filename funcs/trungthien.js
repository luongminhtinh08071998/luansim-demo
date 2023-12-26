let mapPlq = require('./map_phan_loai_que');

function trungThien(lastSixDigits) {
    let l = (lastSixDigits[2] === '0' ? '8' : (lastSixDigits[2] === '9' ? '1' : lastSixDigits[2]))
    let r = (lastSixDigits[3] === '0' ? '8' : (lastSixDigits[3] === '9' ? '1' : lastSixDigits[3]))
  
    return {
        left: l,
        right: r,
        rating: mapPlq.mapPhanLoaiQue[l + "/" + r],
    };
}

module.exports = { trungThien }
