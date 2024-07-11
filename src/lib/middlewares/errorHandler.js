const logger = require('../helpers/loggerHelpers');
const { sendResponse } = require('../helpers/responseHelpers');

function handleError(err, req, res, next) {
    logger.info(err.stack);

    res.status(err.status || 500).json({
        message: err.message,
        status: false,
    });

    next(err);
}

function handleValidationError(err, req, res, next) {
    if (err.name === 'ValidationError') {
        res.status(422).json({ error: err.message });
    } else {
        // console.log(err)
        next(err);
    }
    next();
}

function handleNotFound(req, res, next) {
    res.status(404).json({ error: 'Not Found' });
    next();
}

function handleOtherErrors(err, req, res, next) {
    console.error(err);
    res.status(500).json(sendResponse({ success: false, message: 'Internal Server Error' }));
    next();
}

const errorHandlers = [handleValidationError, handleNotFound, handleOtherErrors];

module.exports = {
    handleError,
    errorHandlers,
};
