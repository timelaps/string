module.exports = indent;
var newLineRegExp = require('../regexp/new-line');

function indent(string, indentation_) {
    var indentation = indentation_ || '';
    return indentation + string.replace(newLineRegExp, '$1' + indentation);
}