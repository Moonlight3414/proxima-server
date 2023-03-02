const express = require("express");
const {
  postProject,
  getAllProjects,
  getSignleProject,
  deleteProject,
  updateProject,
} = require("../controllers/projectController");
const requireAuth = require("../middlewares/requireAuth");

//Router
const router = express.Router();

router.use(requireAuth);

//GET all projects
router.get("/", getAllProjects);

//GET a single project
router.get("/:id", getSignleProject);

//POST a new project
router.post("/", postProject);

//DELETE a new project
router.delete("/:id", deleteProject);

//POST a new project
router.patch("/:id", updateProject);

module.exports = router;
