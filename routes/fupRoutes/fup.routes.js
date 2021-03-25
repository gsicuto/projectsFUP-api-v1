const { Router } = require('express');

const fupRoutes = require('./private/routes');

const router = Router();

router.use('/', fupRoutes);

module.exports = router;
