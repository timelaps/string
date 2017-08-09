var createCompounder = require('../../create-compounder');
var capitalize = require('../../capitalize');
module.exports = createCompounder(function (result, word_, index) {
    var word = word_.toLowerCase();
    return result + (index ? capitalize(word) : word);
});