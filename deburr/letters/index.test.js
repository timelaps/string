var b = require('@timelaps/batterie');
var deburrLetters = require('../deburr/letters');
b.describe('deburrLetters', function () {
    b.expect(deburrLetters).toBeObject();
});