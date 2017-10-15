var words = require('../words');
var deburr = require('../deburr');
var reApos = require('../regexp/apos');
var cacheable = require('@timelaps/fn/cacheable');
var arrayReduce = require('@timelaps/n/reduce');
module.exports = function (callback) {
    return cacheable(function (string) {
        return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
    });
};