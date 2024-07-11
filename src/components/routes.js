const { Router } = require('express');
const {
    competitorModule
} = require('./index');

const router = Router();
router.use('/competitors', competitorModule.routes);

module.exports = router;
