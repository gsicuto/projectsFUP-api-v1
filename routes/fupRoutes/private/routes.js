const { Router } = require("express");

const fupRepo = require("../../../repository/fup.repository");
const projectRepo = require("../../../repository/project.repository");

const router = Router();

router.post("/", async (req, res) => {
  const { user, content, projectId } = req.body;
  try {
    const newFup = await fupRepo.create(content, user);
    await projectRepo.addNewFup(projectId, newFup.id);
    return res.status(201).json(newFup);
  } catch (error) {
    return res.status(500).json({});
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await fupRepo.deleteOne(req.params.id);
    await projectsRepo.removeFup(req.params.id);
    return res.status(200).json({});
  } catch (error) {
    return res.status(500).json({});
  }
});

module.exports = router;
