var reHasUnicode = require('../regexp/unicode');
module.exports = hasUnicodeWord;

function hasUnicodeWord(string) {
    return reHasUnicode.test(string);
}