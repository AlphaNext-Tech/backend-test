const competitorModel = require('./competitor/models/competitor.model');
const competitorService = require('./competitor/competitor.service');
const competitorRoutes = require('./competitor/competitor.routes');


const componentModule = {
    competitorModule: {
        routes: competitorRoutes,
        model: competitorModel,
        service: competitorService,
    },
    
};

module.exports = componentModule;
