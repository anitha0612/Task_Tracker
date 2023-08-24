const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost/task-tracker", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Task model
const Task = mongoose.model("Task", {
  name: String,
  duration: Number,
});

// Create a new task
app.post("/save-task", async (req, res) => {
  try {
    const { taskId, duration } = req.body;
    const task = new Task({ _id: taskId, name: "Task", duration });
    await task.save();
    res.json({ success: true });
  } catch (error) {
    console.error("Error saving task:", error);
    res.status(500).json({ success: false, error: "Error saving task" });
  }
});

// Get all tasks
app.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    console.error("Error getting tasks:", error);
    res.status(500).json({ error: "Error getting tasks" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
