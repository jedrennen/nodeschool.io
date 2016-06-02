// 12-Function Spies
module.exports = function Spy(target, method) {
    this.count = 0;
    
    var self = this,
        orig = target[method];
        
    target[method] = function() {
        self.count++;
        return orig.apply(this, arguments);
    }
    
    return this;
}

// 
// Official Solution
// 
// function Spy(target, method) {
//     var originalFunction = target[method]
//
//     // use an object so we can pass by reference, not value
//     // i.e. we can return result, but update count from this scope
//     var result = {
//         count: 0
//     }
//
//     // replace method with spy method
//     target[method] = function() {
//         result.count++ // track function was called
//         return originalFunction.apply(this, arguments) // invoke original function
//     }
//
//     return result
// }
//
// module.exports = Spy