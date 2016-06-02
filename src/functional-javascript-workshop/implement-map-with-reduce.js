// 11-Implement Map with Reduce
module.exports = function map(arr, fn) {
    return arr.reduce(function(prev, curr, idx, orig) {
        prev.push(fn(orig[idx]));
        return prev;
    }, []);
}

// Official Solution
// module.exports = function arrayMap(arr, fn, thisArg) {
//     return arr.reduce(function(acc, item, index, arr) {
//         acc.push(fn.call(thisArg, item, index, arr))
//         return acc
//     }, [])
// }