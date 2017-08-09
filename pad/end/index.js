var toString = require('@timelaps/to/string');
var toInteger = require('@timelaps/to/integer');
var createPadding = require('../../create-padding');
module.exports = padEnd;

function padEnd(string_, length_, chars) {
    var string = toString(string_);
    var length = toInteger(length_);
    var strLength = length ? string.length : 0;
    return (length && strLength < length) ? string.concat(createPadding(length - strLength, chars)) : string;
}