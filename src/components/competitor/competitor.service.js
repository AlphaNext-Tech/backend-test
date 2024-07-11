const competitorModel = require("./models/competitor.model");

const competitorService = {
    async createCompetitor(payload) {
        const newCompetitor = new competitorModel(payload);
        const competitor = await newCompetitor.save();
        return competitor
    },
    async fetchBusinessName(businessName) {
       try {
        let filter = {};
        filter.businessName = { $regex: businessName, $options: 'i' };
        return await competitorModel.find(filter);
       } catch (error) {
        throw new Error(error)
       }
    },
    async getCompetitor(payload) {
        const { businessName, type, location } = payload;
        let filter = {};

        if (businessName) {
            filter.businessName = { $regex: businessName, $options: 'i' };
        }

        if (type) {
            filter.type = { $regex: type, $options: 'i' };
        }

        if (location) {
            filter.location = { $regex: location, $options: 'i' };
        }
        const competitors = await competitorModel.find(filter);

        return competitors
    }
};

module.exports = competitorService;
