const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WebsiteTrafficSchema = new Schema({
    uniqueVisitors: { type: Number, required: true },
    pageViews: { type: Number, required: true },
    bounceRate: { type: Number, required: true }
});

module.exports = WebsiteTrafficSchema