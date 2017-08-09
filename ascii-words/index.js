var match = require('../match');
var reAsciiWord = require('../regexp/ascii-word');
module.exports = function (string) {
    return match(string, reAsciiWord);
};