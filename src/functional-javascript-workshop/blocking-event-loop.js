// Functional Javascript Workshop: 13-Blocking Event Loop
module.exports = function repeat(operation, num) {
    if (num <= 0) return;
    operation();
    // return repeat(operation, --num);
    
    if (num % 10 == 0) {
        setTimeout(function() {
            repeat(operation, --num);
        });
    } else {
        repeat(operation, --num);
    }
}

/**
 * OFFICIAL SOLUTION
 */
/**
 * 
function repeat(operation, num) {
    if (num <= 0) return

    operation()

    // release control every 10 or so
    // iterations.
    // 10 is arbitrary.
    if (num % 10 === 0) {
        setTimeout(function() {
            repeat(operation, --num)
        })
    } else {
        repeat(operation, --num)
    }
}

module.exports = repeat
 * 
 */