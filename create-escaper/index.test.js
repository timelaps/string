var b = require('@timelaps/batterie');
var createEscaper = require('.');
b.describe('../createEscaper', function () {
    b.expect(createEscaper).toBeFunction();
    b.expect(createEscaper).toReturnFunction();
    b.it('maps keys found in strings to given values', function (t) {
        var escaper = createEscaper({
            is: 'was',
            fun: 'boring'
        });
        t.expect(escaper('escaping is fun')).toEqual('escaping was boring');
    });
});