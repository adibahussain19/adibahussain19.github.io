const express = require("express");
const Writing = require("../models/Writing.js");

const router = express.Router();

console.log("Writing routes loaded");

//GET

router.get("/", async (req, res) => {
    try {
      console.log("Fetching writing samples...");
      const writingItem = await Writing.find();
      console.log("Writing samples fetched:", writingItem);
      res.json(writingItem);
    } catch (err) {
      console.error("Error fetching writing samples:", err);
      res.status(500).json({ message: err.message });
    }
});

//POST

router.post("/", async (req, res) => {
    const writingItem = new Writing({
      title: req.body.title,
      summary: req.body.summary,
      fileLink: req.body.fileLink,
    });
  
    try {
      const newWritingItem = await writingItem.save();
      res.status(201).json(newWritingItem);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
});

module.exports = router;
