// 07-Basic: Recursion
module.exports = function reduce(arr, fn, initial) {
    if (!arr.length) return initial;
    var prev = initial,
        ix = arr.length - 1,
        curr = arr[ix];
    return reduce(arr.slice(0, -1), fn, fn(prev, curr, ix, arr));
}

/**
 * OFFICIAL SOLUTION
 */

/**
function reduce(arr, fn, initial) {
    return (function reduceOne(index, value) {
    if (index > arr.length - 1) return value // end condition
    return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
    })(0, initial) // IIFE. kick off recursion with initial values
}

module.exports = reduce
 */