const { Router } = require('express');

const studentsRoutes = require('./studentsRoutes/students.routes');
const projectsRoutes = require('./projectsRoutes/projects.routes');
const authRoutes = require('./authRoutes/auth.routes');
const jwt = require('jsonwebtoken');

const router = Router();

router.use('/auth', authRoutes);

// middleware de jwt rotas protegidas!!

router.use((req, res, next) => {
  const token = req.get('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'request without token' });
  }
  const tokenWihoutBearer = token.split(' ')[1];

  try {
    const decodedToken = jwt.verify(
      tokenWihoutBearer,
      process.env.TOKEN_SECRET,
    );
    req.user = { id: decodedToken.id };
    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Token Expired' });
  }
});

router.use('/students', studentsRoutes);
router.use('/projects', projectsRoutes);

module.exports = router;
