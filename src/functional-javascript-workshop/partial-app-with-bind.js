// 10-Partial Application with Bind
module.exports = function logger(namespace) {
    return console.log.bind(console, namespace);
}