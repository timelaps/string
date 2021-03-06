var b = require('@timelaps/batterie');
var match = require('.');
b.describe('../match', function () {
    b.expect(match).toBeFunction();
    b.expect(match).notToThrow();
    b.it('matches strings and expressions', function (t) {
        t.expect(match('here\'s a string', 's')).toEqual(['s']);
        t.expect(match('here\'s a string', /s/igm)).toEqual(['s', 's']);
    }, 2);
});