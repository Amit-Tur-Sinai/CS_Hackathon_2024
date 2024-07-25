const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

// Define task routes
router.post('/', async (req, res) => {
  const { title, description, category, location, urgency } = req.body;
  const task = new Task({ title, description, category, location, urgency });
  await task.save();
  res.status(201).send('Task added');
});

router.get('/', async (req, res) => {
  const { category } = req.query;
  const filter = category ? { category } : {};
  const tasks = await Task.find(filter);
  res.json(tasks);
});

module.exports = router;
