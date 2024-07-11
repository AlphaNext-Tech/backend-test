const { check, param } = require('express-validator');

const message = {
    businessName: 'Business name is required',
    type: 'Type is required',
    location: 'Location is required',
    uniqueVisitors: 'Unique visitors count is required',
    pageViews: 'Page views count is required',
    bounceRate: 'Bounce rate is required',
    topPerformingPages: 'Top performing pages are required',
    url: 'Page URL is required',
    trafficVolume: 'Traffic volume is required',
};

exports.createCompetitorValidator = () => [
    check('businessName', message.businessName).isString().notEmpty(),
    check('type', message.type).isString().notEmpty(),
    check('location', message.location).isString().notEmpty(),
    check('websiteTraffic.uniqueVisitors', message.uniqueVisitors).isInt({ min: 0 }).notEmpty(),
    check('websiteTraffic.pageViews', message.pageViews).isInt({ min: 0 }).notEmpty(),
    check('websiteTraffic.bounceRate', message.bounceRate).isFloat({ min: 0, max: 100 }).notEmpty(),
    check('topPerformingPages', message.topPerformingPages).isArray().notEmpty(),
    check('topPerformingPages.*.url', message.url).isString().notEmpty(),
    check('topPerformingPages.*.trafficVolume', message.trafficVolume).isInt({ min: 0 }).notEmpty(),
];

exports.validateId = () => [
    param('id')
        .trim()
        .notEmpty()
        .withMessage('Competitor ID must be present')
        .isMongoId()
        .withMessage('Invalid ID'),
];

exports.updateCompetitor = () => [
    param('id')
        .trim()
        .notEmpty()
        .withMessage('Competitor ID must be present')
        .isMongoId()
        .withMessage('Invalid ID'),
    check('businessName', message.businessName).isString().optional(),
    check('type', message.type).isString().optional(),
    check('location', message.location).isString().optional(),
    check('websiteTraffic.uniqueVisitors', message.uniqueVisitors).isInt({ min: 0 }).optional(),
    check('websiteTraffic.pageViews', message.pageViews).isInt({ min: 0 }).optional(),
    check('websiteTraffic.bounceRate', message.bounceRate).isFloat({ min: 0, max: 100 }).optional(),
    check('topPerformingPages').isArray().optional(),
    check('topPerformingPages.*.url', message.url).isString().optional(),
    check('topPerformingPages.*.trafficVolume', message.trafficVolume).isInt({ min: 0 }).optional(),
];
