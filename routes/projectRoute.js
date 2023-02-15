const express = require("express");
const {
  postProject,
  getAllProjets,
  getSignleProject,
  deleteProject,
  updateProject,
} = require("../controllers/projectController");
const Project = require("../models/projectModel");

//Router
const router = express.Router();

//GET all projects
router.get("/", getAllProjets);

//GET a single project
router.get("/:id", getSignleProject);

//POST a new project
router.post("/", postProject);

//DELETE a new project
router.delete("/:id", deleteProject);

//POST a new project
router.patch("/:id", updateProject);

module.exports = router;
