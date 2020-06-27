const router = require('express').Router();
const scenarioController = require('../../controllers/scenarioController');
// const withAuth = require('../../middleware.js');

// Matches with "/api/..."

// CRUD
router.post('/scenario', scenarioController.create);

module.exports = router;
