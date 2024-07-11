const { Router } = require('express');
const { competitorController } = require('./competitor.controller');
const { createCompetitorMiddlware } = require('./competitor.middleware');
const { createCompetitorValidator } = require('./competitor.validators');
const router = Router();

router.get('/api-status', (req, res) => {
    res.json({ msg: `competitor module working on ${process.env.APP_NAME}` });
});

router.post(
    '/create', 
    createCompetitorValidator(),
    createCompetitorMiddlware, 
    competitorController.createCompetitor);
router.get(
    '/', 
    competitorController.getCompetitor);


// router.put(
//     '/update/:id',
//     getAuthorize,
//     FindProductMiddleware,
//     ProductPermission,
//     ProductController.update,
// );
// router.put(
//     '/updateQuantity/:id',
//     getAuthorize,
//     FindProductMiddleware,
//     ProductPermission,
//     ProductController.updateProductQuantity,
// );

// router.delete(
//     '/delete/:id',
//     getAuthorize,
//     FindProductMiddleware,
//     ProductPermission,
//     ProductController.delete,
// );

// router.get('/all/:categoryId', userAuthChecker, ProductController.fetchByCategory);


module.exports = router;
