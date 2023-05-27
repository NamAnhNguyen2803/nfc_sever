function AddZero(num) {
    return (num >= 0 && num < 10) ? "0" + num : num + "";
}

function getMomentDATETIME(){
    var now = new Date();
    var strDateTime = [[now.getFullYear(),
        AddZero(now.getMonth() + 1),
        AddZero(now.getDate())].join("-"), 
        [AddZero(now.getHours()), 
        AddZero(now.getMinutes()),
        (AddZero(now.getSeconds()))].join(":")].join(" ");
    
    return strDateTime;
}

module.exports = {
    getMomentDATETIME
}