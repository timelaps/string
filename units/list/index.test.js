var unitList = require('../units/list');
var b = require('@timelaps/batterie');
var forEach = require('@timelaps/array/for/each');
b.describe('units.list', function () {
    b.expect(unitList).toBeArray();
    forEach(unitList, function (unit) {
        b.expect(unit).toBeString(unit);
    });
});