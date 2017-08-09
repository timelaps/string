var a, match = require('../match');
var isUndefined = require('@timelaps/is/undefined');
var unicodeWords = require('../unicode-words');
var asciiWords = require('../ascii-words');
var hasUnicodeWord = require('../has-unicode-word');
var toString = require('@timelaps/to/string');
module.exports = function (string_, pattern_, guard) {
    var string = toString(string_),
        pattern = guard ? a : pattern_;
    if (isUndefined(pattern)) {
        return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
    }
    return match(string, pattern);
};