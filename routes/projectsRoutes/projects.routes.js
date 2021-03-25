const { Router } = require('express');

const projectsRoutes = require('./private/routes');

const router = Router();

router.use('/', projectsRoutes);

module.exports = router;
