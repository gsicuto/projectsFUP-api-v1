const { Router } = require('express');

const projectRepo = require('../../../repository/project.repository');

const router = Router();

router.get('/list', async (req, res) => {
  const projects = await projectRepo.getAll();
  return res.status(200).json(projects);
});

router.post('/', async (req, res) => {
  const newProject = await projectRepo.create(req.body);
  return res.status(201).json(newProject);
});

router.get('/:id', async (req, res) => {
  const updateProject = await projectRepo.getOne(req.params.id, true);
  return res.status(200).json(updateProject);
});

router.put('/:id', async (req, res) => {
  const updateProject = await projectRepo.updateOne(req.body, req.params.id);
  return res.status(200).json(updateProject);
});

router.post('/add-student/:id', async (req, res) => {
  const project = await projectRepo.addNewStudent(req.params.id, req.body.studentId);
  return res.status(200).json(project);
});

module.exports = router;
