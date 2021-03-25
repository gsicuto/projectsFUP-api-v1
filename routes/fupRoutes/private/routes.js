const { Router } = require('express');

const fupRepo = require('../../../repository/fup.repository');
const projectRepo = require('../../../repository/project.repository');

const router = Router();


router.post('/', async (req, res) => {
  const { user, content, projectId } = req.body;
  const newFup = await fupRepo.create(content, user);
  await projectRepo.addNewFup(projectId, newFup.id);
  return res.status(201).json(newFup);
});

module.exports = router;
