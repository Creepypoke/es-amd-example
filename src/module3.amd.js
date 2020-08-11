define([
    'lodash/range',
    'lodash/random'
], function(
    range
) {
    return function fillArray(length) {
        return range(length)
    }
})