const { Router } = require('express');
const {createCompetitor, getCompetitor } = require('../controllers/competitorController');

const router = Router();

router.post('/', createCompetitor);
router.get('/:id', getCompetitor);

module.exports = router;