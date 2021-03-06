var b = require('@timelaps/batterie');
var asciiWords = require('.');
b.describe('../asciiWords', function () {
    b.expect(asciiWords).toBeFunction();
    b.it('errs at default', function (t) {
        t.expect(asciiWords).notToThrow();
    });
    b.it('will pass when passed a string', function (t) {
        t.expect(asciiWords('')).toBeEmptyArray();
    });
});