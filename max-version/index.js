module.exports = maxVersion;
var find = require('@timelaps/array/find');
var convertVersionString = require('../convert-version');
var isStrictlyEqual = require('@timelaps/is/strictly-equal');
var isTrue = require('@timelaps/is/true');
var isFalse = require('@timelaps/is/false');
var isNil = require('@timelaps/is/nil');
var toNumber = require('@timelaps/hacks/to-number');
var LENGTH = 'length';

function maxVersion(string1, string2) {
    // string 2 is always the underdogl
    var split1, split2, found, split1Length, split2Length, provenLarger, cvs1Result = convertVersionString(string1),
        cvs2Result = convertVersionString(string2);
    // keyword checks
    if (isNil(string1) || isNil(string2)) {
        return false;
    } else if (isTrue(cvs1Result) || isTrue(cvs2Result)) {
        return true;
    } else if (isFalse(cvs1Result) && isFalse(cvs2Result)) {
        // compare them as version strings
        split1 = string1.split('.');
        split2 = string2.split('.');
        split1Length = split1[LENGTH];
        split2Length = split2[LENGTH];
        found = find({
            length: Math.min(split1Length, split2Length)
        }, function (value, index) {
            var num1 = toNumber(split1[index]) || 0,
                num2 = toNumber(split2[index]) || 0;
            if (num1 < num2) {
                provenLarger = true;
            } else if (num1 > num2) {
                provenLarger = false;
            }
            return !isNil(provenLarger);
        });
        if (isNil(provenLarger)) {
            if (split1Length < split2Length) {
                return true;
            } else if (split1Length > split2Length) {
                return false;
            }
        }
        return !!provenLarger;
    } else {
        return string1 <= string2;
    }
}