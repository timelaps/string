var nativeCeil = Math.ceil;
var toArray = require('@timelaps/to/array');
var baseRepeat = require('../base/repeat');
var baseToString = require('@timelaps/to/base/string');
var isUndefined = require('@timelaps/is/undefined');
var castSlice = require('../cast-slice');
var hasUnicode = require('../has-unicode-word');
module.exports = createPadding;

function createPadding(length, chars_) {
    var chars = isUndefined(chars_) ? ' ' : baseToString(chars_);
    var charsLength = chars.length;
    if (charsLength < 2) {
        return charsLength ? baseRepeat(chars, length) : chars;
    }
    var result = baseRepeat(chars, nativeCeil(length / charsLength));
    return hasUnicode(chars) ? castSlice(toArray(result), 0, length).join('') : result.slice(0, length);
}