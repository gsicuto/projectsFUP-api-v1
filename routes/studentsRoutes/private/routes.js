const { Router } = require('express');

const studentRepo = require('../../../repository/student.repository');

const router = Router();

router.get('/list', async (req, res) => {
  const students = await studentRepo.getAll();
  return res.status(200).json(students);
});

router.post('/', async (req, res) => {
  const newStudent = await studentRepo.create(req.body);
  return res.status(201).json(newStudent);
});

router.put('/:id', async (req, res) => {
  const updatedStudent = await studentRepo.updateOne(req.body, req.params.id);
  return res.status(200).json(updatedStudent);
});

module.exports = router;
