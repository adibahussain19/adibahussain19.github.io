const express = require("express");
const Project = require("../models/Project.js");


const router = express.Router();

console.log("Project routes loaded");

//GET

router.get("/", async (req, res) => {
    try {
      console.log("Fetching projects...");
      const Projects = await Project.find();
      console.log("Projects fetched:", Projects);
      res.json(Projects);
    } catch (err) { 
      console.error("Error fetching projects:", err);
      res.status(500).json({ message: err.message });
    }
});

//POST

router.post("/", async (req, res) => {
    const project = new Project({
      title: req.body.title,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
    });
  
    try {
      const newProject = await project.save();
      res.status(201).json(newProject);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
});

module.exports = router;
