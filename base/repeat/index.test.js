var repeat = require('.');
var b = require('@timelaps/batterie');
b.describe('repeat', function () {
    b.expect(repeat).toBeFunction();
    b.it('repeats strings', function (t) {
        t.expect(repeat('la', 3)).toBe('lalala');
    });
});