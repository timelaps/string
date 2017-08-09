var createCompounder = require('../create-compounder');
module.exports = createCompounder(function (result, word, index) {
    return result + (index ? '-' : '') + word.toLowerCase();
});