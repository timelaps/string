module.exports = pad;
var toString = require('@timelaps/to/string');
var toInteger = require('@timelaps/to/integer');
var floor = Math.floor;
var ceil = Math.ceil;
var createPadding = require('../create-padding');

function pad(string_, length_, chars) {
    var string = toString(string_);
    var length = toInteger(length_);
    var strLength = length ? string.length : 0;
    if (!length || strLength >= length) {
        return string;
    }
    var mid = (length - strLength) / 2;
    return createPadding(floor(mid), chars) + string + createPadding(ceil(mid), chars);
}