var b = require('@timelaps/batterie');
var escape = require('.');
b.describe('../escape', function () {
    b.expect(escape).toBeFunction();
    b.expect(escape).toReturnString();
    b.it('replaces html', function (t) {
        t.expect(escape('<div></div>')).toEqual('&lt;div&gt;&lt;/div&gt;');
    });
});