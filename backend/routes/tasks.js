const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// GET all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// Task.find(): This is a method call that retrieves all documents from the Task collection in the database. Task is presumably a model representing a MongoDB collection.
// await: This keyword is used to pause the execution of the code until the Task.find() promise resolves. It helps in handling asynchronous operations more smoothly.
// Task.find(): This method returns a "promise". It's a placeholder for an asynchronous operation (like a database query). When the query completes, the promise will be either fulfilled (with the query results) or rejected (if an error occurs).
// await: By using await in front of Task.find(), the function pauses execution until the promise is fulfilled or rejected. If the promise is fulfilled, await returns the result of the promise (in this case, the list of tasks). If the promise is rejected, an error is thrown, and control passes to the catch block.
// res.json(): This method sends a JSON response. Here, it sends the tasks data retrieved from the database back to the client. The client receives this data in JSON format.

// POST a new task
router.post('/', async (req, res) => {
  const task = new Task({
    title: req.body.title,
    description: req.body.description,
    status: req.body.status
  });

  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a task
router.delete('/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;