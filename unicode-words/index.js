var match = require('../match');
var reUnicodeWord = require('../regexp/unicode-word');
module.exports = function (string) {
    return match(string, reUnicodeWord);
};