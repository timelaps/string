var customUnits = require('./custom');
var baseUnitList = require('./list');
units.list = baseUnitList.slice(0);
module.exports = units;

function units(str) {
    return customUnits(str, baseUnitList);
}