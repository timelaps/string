var keys = require('@timelaps/n/keys');
var isNil = require('@timelaps/is/nil');
module.exports = createEscaper;

function createEscaper(map) {
    var source = '(?:' + keys(map).join('|') + ')';
    var testRegexp = newRegExp(source);
    var replaceRegexp = newRegExp(source, 'g');
    return function (string_) {
        var string = isNil(string_) ? '' : '' + string_;
        return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };

    function escaper(match) {
        return map[match];
    }
}

function newRegExp(source, types) {
    return new RegExp(source, types);
    // /(\s+|\W|\w*)/
}