var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
    deburrLetters = require('../deburr/letters'),
    toString = require('@timelaps/to/string'),
    rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
    rsComboSymbolsRange = '\\u20d0-\\u20f0',
    rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']',
    reComboMark = RegExp(rsCombo, 'g'),
    propertyOf = require('@timelaps/object/property/of'),
    accessLetter = propertyOf(deburrLetters);
module.exports = function (string_) {
    var string = toString(string_);
    return string && string.replace(reLatin, accessLetter).replace(reComboMark, '') || '';
};