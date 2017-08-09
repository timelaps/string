var cacheable = require('@timelaps/fn/cacheable');
module.exports = cacheable(function (s) {
    return s[0].toUpperCase() + s.slice(1);
});