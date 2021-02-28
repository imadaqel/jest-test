var dateFormat = require("dateformat");

function dateobj(now, x) {
    var mask = '';
    if (x === "MM-DD/YYYY")
        mask = "mm/dd/yyyy";
    else if (x === "MMM-D/YYYY")
        mask = "mmm d, yyyy"
    var z = dateFormat(now, mask);
    return z;
}
module.exports = dateobj;

