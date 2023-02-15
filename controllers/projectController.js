const mongoose = require("mongoose");
const Project = require("../models/projectModel");

//Get all projects
const getAllProjets = async (req, res) => {
  const projects = await Project.find({});

  res.status(200).json(projects);
};
//Get a signle project
const getSignleProject = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ messege: "Invalid project id!" });
  }

  const project = await Project.findById(id);

  if (!project) {
    return res.status(404).json({ error: "No project found!" });
  }
  res.status(200).json(project);
};

//Post a new project
const postProject = async (req, res) => {
  const data = req.body;

  try {
    const project = await Project.create({
      ...data,
    });

    res.status(200).json(project);
  } catch (err) {
    res.status(400).json({ error: err.messege });
  }
};
//Delete a project
const deleteProject = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ messege: "Invalid project id" });
  }

  const project = await Project.findOneAndDelete({ _id: id });
  if (!project) {
    return res.status(400).json({ messege: "No project found!" });
  }

  res.status(200).json(project);
};

//Update a project
const updateProject = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ messege: "Invalid project id" });
  }

  const project = await Project.findOneAndUpdate({ _id: id }, { ...req.body });
  if (!project) {
    return res.status(400).json({ messege: "No project found!" });
  }

  res.status(200).json(project);
};

module.exports = {
  postProject,
  getAllProjets,
  getSignleProject,
  deleteProject,
  updateProject,
};
