const { validationResult } = require('express-validator');
const { sendResponse } = require('../../lib/helpers/responseHelpers');
const competitorUsecase = require('./competitor.useCase');

exports.competitorController = {
    async createCompetitor(req, res) {
        const {businessName, type, location, websiteTraffic, topPerformingPages}= req.body
        try {
            const payload = {
                businessName,
                type,
                location,
                websiteTraffic,
                topPerformingPages
            };
            const businessAlreadyExist = await competitorUsecase.fetchBusinessName(businessName)
            if(businessAlreadyExist){
                return res.status(409).json(
                        sendResponse({
                            success: false,
                            message: "Business name already exist!!"
                        })
                    )
            }
            const result = await competitorUsecase.createCompetitor(payload)
            res.status(201).json(
                sendResponse({
                    success: true,
                    content: result,
                    message: 'Competitor added successfully',
                }),
            );
        } catch (err) { 
            console.log(err)
            res.status(500).send({message: "internal server error"})
        }
    },
    async getCompetitor(req, res) {
        try {
            const filter = {};
            if (req.query.businessName) filter.businessName = req.query.businessName;
            if (req.query.type) filter.type = req.query.type;
            if (req.query.location) filter.location = req.query.location;
            const result = await competitorUsecase.getCompetitor(filter)
            res.status(200).json(
                sendResponse({
                    message: 'List of competitor(s)',
                    content: result,
                    success: true,
                }),
            );
        } catch (error) {
            console.log(error)
            res.status(500).json(
                sendResponse({
                    message: "internal server error",
                    success: false
                })
            )
        }
    },

    async getSingleAddress(req, res) {
        const user = req.currentUser;
        const { addressId } = req.params;

        try {
            const singleAddress = await addressService.getSingleAddress(addressId, user._id);

            res.status(200).json(
                sendResponse({
                    message: 'Single address detail',
                    content: singleAddress,
                    success: true,
                }),
            );
        } catch (error) {
            handleError(res, error);
        }
    },
    async deleteAddress(req, res) {
        const user = req.currentUser;
        const { addressId } = req.params;
        const userId = user._id;

        try {
            const result = await addressService.deleteCustomerAddress(userId, addressId);

            res.status(200).send(
                sendResponse({
                    success: true,
                    message: 'User address deleted successfully',
                }),
            );
        } catch (err) {
            return res.status();
        }
    },
};