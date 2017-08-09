var uuidHash = {};
var crypto = require('@timelaps/hacks/crypto');
module.exports = function uuid() {
    return _uuid(4);
};

function _uuid(idx) {
    var sid = ('xxxxxxxx-xxxx-' + idx + 'xxxx-yxxx-xxxxxxxxxxxx'.slice((idx + '').length)).replace(/[xy]/g, function (c) {
        var rnd = crypto(),
            r = rnd % 16,
            v = (c === 'x') ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
    // if crypto check passes, you can trust the browser
    return uuidHash[sid] ? _uuid(idx + 1) : (uuidHash[sid] = true) && sid;
}