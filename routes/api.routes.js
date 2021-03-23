const { Router } = require('express');

const studentsRoutes = require('./studentsRoutes/students.routes');
const projectsRoutes = require('./projectsRoutes/projects.routes');
const authRoutes = require('./authRoutes/auth.routes');

const router = Router();
router.use('/auth', authRoutes);
router.use('/students', studentsRoutes);
router.use('/projects', projectsRoutes);


module.exports = router;
