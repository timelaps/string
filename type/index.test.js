var type = require('../type');
var b = require('@timelaps/batterie');
b.describe('type', function () {
    b.expect(type).toBeFunction();
    b.it('returns the type of operation', function (t) {
        t.expect(type({})).toBe('object');
        t.expect(type(0)).toBe('number');
    }, 2);
});