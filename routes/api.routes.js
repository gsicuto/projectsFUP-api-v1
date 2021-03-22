const { Router } = require('express');

const studentsRoutes = require('./studentsRoutes/students.routes');

const router = Router();

router.use('/students', studentsRoutes);


module.exports = router;
