const { Router } = require('express');

const authRoutes = require('../authRoutes/public/routes');

const router = Router();

router.use('/', authRoutes);

module.exports = router;
