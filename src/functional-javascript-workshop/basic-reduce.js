// 06-Basic: Reduce
module.exports = function countWords(inputWords) {
    return inputWords.reduce(
        (prev, curr, ix) => {
            prev[curr] = (curr in prev) ? prev[curr] + 1 : 1;
            return prev;
        }
        , {});
};

//
// OFFICIAL SOLUTION
//
// function countWords(arr) {
//     return arr.reduce(function(countMap, word) {
//     countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
//     return countMap
//     }, {}) // second argument to reduce initialises countMap to {}
// }
//
// module.exports = countWords