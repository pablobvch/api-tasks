const express = require("express");
const Task = require("./models/Task"); // new
const router = express.Router();

// Get all posts
router.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.status(200).json({ data: tasks });
});

router.post("/tasks", async (req, res) => {
  const task = new Task({
    name: req.body.name,
    status: req.body.status,
  });
  await task.save();
  res.status(201).json({ data: task });
});

router.get("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id });
    if (!task) {
      return res.status(404).json({ error: "Task doesn't exist!" });
    }
    res.status(200).json({ data: task });
  } catch {
    res.status(400).json({ error: "Invalid ID format." });
  }
});

router.put("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id });
    if (!task) {
      return res.status(404).json({ error: "Task doesn't exist!" });
    }
    if (req.body.name !== undefined) {
      task.name = req.body.name;
    }
    if (req.body.status !== undefined) {
      task.status = req.body.status;
    }
    await task.save();
    res.status(200).json({ data: task });
  } catch {
    res.status(400).json({ error: "Invalid ID format." });
  }
});

router.delete("/tasks/:id", async (req, res) => {
  try {
    const result = await Task.deleteOne({ _id: req.params.id });
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Task doesn't exist!" });
    }
    res.status(200).json({ message: "Task deleted successfully." });
  } catch {
    res.status(400).json({ error: "Invalid ID format." });
  }
});

module.exports = router;
