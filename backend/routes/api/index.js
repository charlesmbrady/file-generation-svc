const router = require('express').Router();
const scenarioRoutes = require('./scenario');

router.use(scenarioRoutes);

module.exports = router;
