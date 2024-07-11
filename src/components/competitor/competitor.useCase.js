const { remove } = require('lodash');
const competitorService = require('./competitor.service');

const competitorUsecase = {
    async createCompetitor(payload) {
        const reponse = await competitorService.createCompetitor(payload)
        return reponse;
    },
    async fetchBusinessName(businessName) {
        return await competitorService.fetchBusinessName(businessName)
    },
    async getCompetitor(payload) {
        return await competitorService.getCompetitor(payload)
    },
    
};

module.exports = competitorUsecase;
