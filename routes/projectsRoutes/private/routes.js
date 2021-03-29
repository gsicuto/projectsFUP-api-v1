const { Router } = require("express");

const studentRepo = require("../../../repository/student.repository");
const projectRepo = require("../../../repository/project.repository");

const router = Router();

router.get("/list", async (req, res) => {
  const { title } = req.query;
  if (!title) {
    const projects = await projectRepo.getAll();
    return res.status(200).json(projects);
  }
  const projects = await projectRepo.getByTitle(title);
  console.log(projects);
  return res.status(200).json(projects);
});

router.post("/", async (req, res) => {
  const newProject = await projectRepo.create(req.body);
  return res.status(201).json(newProject);
});

router.get("/:id", async (req, res) => {
  const updateProject = await projectRepo.getOne(req.params.id, true);
  return res.status(200).json(updateProject);
});

router.put("/:id", async (req, res) => {
  const updateProject = await projectRepo.updateOne(req.body, req.params.id);
  return res.status(200).json(updateProject);
});

router.post("/add-student/:id", async (req, res) => {
  const project = await projectRepo.addNewStudent(
    req.params.id,
    req.body.studentId
  );
  return res.status(200).json(project);
});

router.delete("/:id", async (req, res) => {
  await projectRepo.deleteOne(req.params.id);
  await studentRepo.removeProject(req.params.id);
});

module.exports = router;
