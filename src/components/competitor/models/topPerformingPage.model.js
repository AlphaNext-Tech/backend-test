const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TopPerformingPageSchema = new Schema({
    url: { type: String, required: true },
    trafficVolume: { type: Number, required: true }
});


module.exports = TopPerformingPageSchema;