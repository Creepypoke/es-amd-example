define([
        'lodash/filter',
        './module3.amd.js'
    ], function(
        filter,
        fillArray
    ) {

    const joper = fillArray(100)

    return filter(joper, function(i) {
        return (i % 2) > 0
    })

})