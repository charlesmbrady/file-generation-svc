const router = require('express').Router();
const dataController = require('../../controllers/dataController');
const withAuth = require('../../middleware.js');

// Matches with "/api/..."

// CRUD
// router.post('/data', withAuth, dataController.create);
// router.get('/data/:id', withAuth, dataController.getById);
// router.put('/data/:id', withAuth, dataController.updateById);
// router.delete('/data/:id', withAuth, dataController.deleteById);

router.get('/data', dataController.getData);

module.exports = router;
