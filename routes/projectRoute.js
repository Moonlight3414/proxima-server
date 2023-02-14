const express = require("express");

//Router
const router = express.Router();

//GET all projects
router.get("/", (req, res) => {
  res.json({ messege: "GET all projects" });
});

//GET a single project
router.get("/:id", (req, res) => {
  res.json({ messege: "GET a signle project" });
});

//POST a new project
router.post("/", (req, res) => {
  res.json({ messege: "POST a new project" });
});

//DELETE a new project
router.delete("/:id", (req, res) => {
  res.json({ messege: "DELETE a new project" });
});

//POST a new project
router.patch("/:id", (req, res) => {
  res.json({ messege: "PATCH a new project" });
});

module.exports = router;
