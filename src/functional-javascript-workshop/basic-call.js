// 08-Basic: Call
module.exports = function duckCount() {
    return Array.prototype.slice.call(arguments)
        .filter((obj) => Object.prototype.hasOwnProperty.call(obj, 'quack'))
        .length;
};

/**
 * OFFICIAL SOLUTION
 */
/*
function duckCount() {
    return Array.prototype.slice.call(arguments).filter(function(obj) {
        return Object.prototype.hasOwnProperty.call(obj, 'quack')
    }).length
}

module.exports = duckCount
*/