var customUnits = require('../units/custom');
var b = require('@timelaps/batterie');
b.describe('customUnits', function () {
    b.expect(customUnits).toBeFunction();
    b.it('exposes a way to parse strings, looking for custom piece', function (t) {
        t.expect(customUnits('5whoops', ['oops', 'eek', 'whoops'])).toBe('whoops');
    });
});