var b = require('@timelaps/batterie');
var createPadding = require('.');
b.describe('../createPadding', function () {
    b.expect(createPadding).toBeFunction();
    b.expect(createPadding).toReturnString();
    b.it('creates a repeating string', function (t) {
        var padd = createPadding(5, 'de');
        t.expect(padd).toBe('deded');
    });
});