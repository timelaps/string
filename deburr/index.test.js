var b = require('@timelaps/batterie');
var deburr = require('.');
b.describe('../deburr', function () {
    b.expect(deburr).toBeFunction();
    b.expect(deburr).toReturnString();
    b.it('replaces special characters with accents', function (t) {
        var burred = 'áë';
        t.expect(deburr(burred)).toBe('ae');
    });
});