var b = require('@timelaps/batterie');
var createCompounder = require('.');
b.describe('../createCompounder', function () {
    b.expect(createCompounder).toBeFunction();
    b.expect(createCompounder).notToThrow();
    b.it('iterate over all of the tokens', function (t) {
        var tokeneater = createCompounder(function (memo, token) {
            return memo + token;
        });
        t.expect(tokeneater('tokens galore')).toBe('tokensgalore');
    });
});