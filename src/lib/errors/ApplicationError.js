class ApplicationError extends Error {
    constructor(message = 'ApplicationError', status = 500) {
        super();
        if (message != null) {
            this.message = message;
        }
        if (status != null) {
            this.status = status;
        }
    }
}

module.exports = ApplicationError;
