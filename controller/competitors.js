let competitors = [];

// Function to create a competitor profile
const createCompetitorProfile = (req, res) => {
    const { businessName, type, location } = req.body;
    const newCompetitor = {
        businessName,
        type,
        location,
        websiteTraffic: {
            dailyVisitors: Math.floor(Math.random() * 1000) + 100, // Random number between 100 and 1100
            monthlyVisitors: Math.floor(Math.random() * 30000) + 1000, // Random number between 1000 and 31000
            topPerformingPages: [
                { page: "home", views: Math.floor(Math.random() * 10000) + 500 },
                { page: "products", views: Math.floor(Math.random() * 8000) + 300 },
                { page: "about", views: Math.floor(Math.random() * 6000) + 200 }
            ]
        }
    };
    competitors.push(newCompetitor);
    res.status(201).json(newCompetitor);
};

// Function to view competitor details
const viewCompetitorDetails = (req, res) => {
    const { businessName } = req.params;
    const competitor = competitors.find(comp => comp.businessName === businessName);
    if (!competitor) {
        return res.status(404).json({ message: 'Competitor not found' });
    }
    res.json(competitor);
};

module.exports = {
    createCompetitorProfile,
    viewCompetitorDetails
};
