const express = require('express');
const app = express();
app.use(express.json());

let todos = [];

// GET - எல்லா todos காட்டு
app.get('/todos', (req, res) => {
  res.json(todos);
});

// POST - புதுசா todo add பண்ணு
app.post('/todos', (req, res) => {
  const todo = { id: Date.now(), text: req.body.text };
  todos.push(todo);
  res.status(201).json(todo);
});

app.listen(3000, () => {
  console.log('Server running on port 3000 🚀');
});

module.exports = app;
