exports.sendResponse = ({ message, content, success = true }) => ({
    success,
    content: content || {},
    message: message || '',
});
