const express = require('express');
const router = express.Router();
const { createCompetitorProfile, viewCompetitorDetails } = require('../controller/competitors');

// Create a competitor profile
router.post('/', createCompetitorProfile);

// View competitor details
router.get('/:businessName', viewCompetitorDetails);

module.exports = router;
