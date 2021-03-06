var b = require('@timelaps/batterie');
var hasUnicodeWord = require('.');
b.describe('../hasUnicodeWord', function () {
    b.expect(hasUnicodeWord).toBeFunction();
    b.expect(hasUnicodeWord).toReturnFalse();
    b.it('checks for words in strings', function (t) {
        t.expect(hasUnicodeWord('a unicode word goes here')).toBeFalse();
        t.expect(hasUnicodeWord('a unicode &#x0000; goes here')).toBeTrue();
    }, 2);
});