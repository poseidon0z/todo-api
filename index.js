const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

let todos = [];

app.get('/api/todos', (req, res) => {
  res.json(todos);
});

app.post('/api/todos', (req, res) => {
  const newTodo = req.body.text;
  console.log(req.body.text);
  todos.push(newTodo);
  res.status(201).json(newTodo);
});
