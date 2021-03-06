var b = require('@timelaps/batterie');
var units = require('../units');
b.describe('units', function () {
    b.expect(units).toBeFunction();
    b.expect(units.list).toEqual(require('../units/list'));
    b.it('parses out any unit it knows about', function (t) {
        t.expect(units('500px')).toBe('px');
        t.expect(units('500rem')).toBe('rem');
        t.expect(units('500em')).toBe('em');
        t.expect(units('500%')).toBe('%');
    }, 4);
});