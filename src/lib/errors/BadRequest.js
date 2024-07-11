const ApplicationError = require('./ApplicationError');
class BadRequest extends ApplicationError {
    constructor(message) {
        super(message || 'Bad request', 400);
    }
}

module.exports = BadRequest;
