const { Router } = require('express');

const studentsRoutes = require('./private/routes');

const router = Router();

router.use('/', studentsRoutes);

module.exports = router;
