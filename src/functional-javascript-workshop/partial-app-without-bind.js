// 09-Partial Application without Bind
module.exports = function logger(namespace) {
    return function() {
        console.log.apply(console, [namespace].concat(Array.prototype.slice.call(arguments)));
    }
}

/**
 * OFFICIAL SOLUTION
 */
/*
var slice = Array.prototype.slice

function logger(namespace) {
  return function() {
    console.log.apply(console, [namespace].concat(slice.call(arguments)))
  }
}

module.exports = logger
*/