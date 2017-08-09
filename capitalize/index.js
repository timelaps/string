var cacheable = require('@timelaps/fn/cacheable');
var upperCase = require('@timelaps/to/upper-case');
module.exports = cacheable(function (s) {
    return upperCase(s[0]) + s.slice(1);
});