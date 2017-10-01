module.exports = tokenator;
var toArray = require('@timelaps/to/array');
var reduce = require('@timelaps/array/reduce');
var find = require('@timelaps/array/find');
var isNil = require('@timelaps/is/nil');
var isFalse = require('@timelaps/is/false');
var returnsFirst = require('@timelaps/returns/first');

function newLine(memo) {
    return memo.concat('\n');
}

function tokenator(options) {
    var regexp = options.match || /(\s+|\W|\w+)/igm;
    var target = options.target || '';
    var tokens = options.tokens || [];
    var iterator = options.eater || eater;
    var execHandle = options.newBlock || newLine;
    var block = options.block || /(\r|\n)/igm;
    var lines = target.split(block);
    var memo = options.memo || '';
    var finished = options.finishBlock || returnsFirst;
    return reduce(lines, operateOnLine, memo);

    function eater(options, lineindex) {
        var tokens = options.tokens || [];
        return function (memo, item, index) {
            var matched, m = memo,
                token = find(tokens, function (token) {
                    var match = token.match || /./igm;
                    if (match) {
                        matched = item.match(match);
                        return matched;
                    }
                });
            if (token && token.handle) {
                matched = toArray(matched);
                m = token.handle(memo, item, index, matched, lineindex);
            }
            return m;
        };
    }

    function operateOnLine(memo, item, index, lines) {
        var lineindex, line, result = memo;
        if (item) {
            lineindex = index;
            result = reduce(item.match(regexp), eater(options, lineindex), memo);
        }
        line = lines.length - 1 !== index && lines[index];
        result = finished(result, line, index);
        if (isFalse(line)) {
            return result;
        } else {
            return execHandle(result, line, index);
        }
    }
}