var customUnits = require('../units/custom');
var baseUnitList = require('../units/list');
units.list = baseUnitList.slice(0);
module.exports = units;

function units(str) {
    return customUnits(str, baseUnitList);
}