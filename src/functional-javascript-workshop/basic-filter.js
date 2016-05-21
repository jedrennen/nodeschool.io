module.exports = function getShortMessages(messages) {
    return messages
        .map((val) => val.message)
        .filter((elem) => elem.length < 50);
};