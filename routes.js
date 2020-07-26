const express = require("express");
const Task = require("./models/Task"); // new
const router = express.Router();

// Get all posts
router.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.send(tasks);
});

router.post("/tasks", async (req, res) => {
  const task = new Task({
    name: req.body.name,
    done: req.body.done
  });
  await task.save();
  res.send(task);
});

router.get("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id });
    res.send(task);
  } catch {
    res.status(404);
    res.send({ error: "Task doesn't exist!" });
  }
});

router.put("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id });

    if (req.body.name) {
      task.name = req.body.name;
    }

    if (req.body.done) {
      task.done = req.body.done;
    }

    await task.save();
    res.send(task);
  } catch {
    res.status(404);
    res.send({ error: "Task doesn't exist!" });
  }
});

router.delete("/tasks/:id", async (req, res) => {
  try {
    await Task.deleteOne({ _id: req.params.id });
    res.status(204).send();
  } catch {
    res.status(404);
    res.send({ error: "Task doesn't exist!" });
  }
});

module.exports = router;
