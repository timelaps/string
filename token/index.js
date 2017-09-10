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
    var execHandle = options.newBlock || newLine;
    var block = options.block || /(\r|\n)/igm;
    var lines = target.split(block);
    var memo = options.memo || '';
    var finished = options.finishBlock || returnsFirst;
    return reduce(lines, operateOnLine, memo);

    function operateOnLine(memo, item, index, lines) {
        var lineindex, line, result = memo;
        if (item) {
            lineindex = index;
            result = reduce(item.match(regexp), function (memo, item, index) {
                var matched, m = memo,
                    token = find(tokens, function (token) {
                        var match = token.match || /./igm;
                        if (match) {
                            matched = item.match(match);
                            return matched;
                        }
                    });
                if (token && token.handle) {
                    m = token.handle(memo, item, index, toArray(matched), lineindex);
                }
                return m;
            }, memo);
        }
        line = lines.length - 1 !== index && lines[index];
        result = finished(result, line, index);
        return isFalse(line) ? result : execHandle(result, line, index);
    }
}