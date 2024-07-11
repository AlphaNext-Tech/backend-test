const { validationResult } = require("express-validator");
const { sendResponse } = require("../../lib/helpers/responseHelpers");

exports.createCompetitorMiddlware = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const uniqueErrors = errors.array().reduce((acc, current) => {
                const x = acc.find(item => item.path === current.path);
                if (!x) {
                    return acc.concat([current]);
                } else {
                    return acc;
                }
            }, []);
            return res.status(400).json(
                sendResponse({
                    message: 'Error',
                    success: false,
                    content: uniqueErrors
                }),
            )
        }
        next();
    } catch (error) {
        throw new Error(error);
    }
};