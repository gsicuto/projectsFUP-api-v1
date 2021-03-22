const { Router } = require('express');

const studentsRoutes = require('./studentsRoutes/students.routes');
const projectsRoutes = require('./projectsRoutes/projects.routes')

const router = Router();

router.use('/students', studentsRoutes);
router.use('/projects', projectsRoutes);


module.exports = router;
