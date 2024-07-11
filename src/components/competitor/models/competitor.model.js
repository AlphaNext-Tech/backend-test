const mongoose = require('mongoose');
const WebsiteTrafficSchema = require('./websiteTraffic.model');
const TopPerformingPageSchema = require('./topPerformingPage.model');
const Schema = mongoose.Schema;

const CompetitorSchema = new Schema({
    businessName: { type: String, required: true },
    type: { type: String, required: true },
    location: { type: String, required: true },
    websiteTraffic: { type: WebsiteTrafficSchema, required: true },
    topPerformingPages: { type: [TopPerformingPageSchema], required: true }
});

module.exports = mongoose.model('Competitor', CompetitorSchema);
