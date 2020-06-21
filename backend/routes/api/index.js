const router = require('express').Router();
const dataRoutes = require('./data');

router.use(dataRoutes);

module.exports = router;
