const express = require('express');
const path = require('path');
const app = express();

// Sample data for tasks (replace with actual data from a database if used later)
const todayTasks = [
  { id: 1, title: 'Task 1 - Today', description: 'This is Task 1 for today', completed: false },
  { id: 2, title: 'Task 2 - Today', description: 'This is Task 2 for today', completed: false },
  { id: 3, title: 'Task 3 - Today', description: 'This is Task 3 for today', completed: false },
];

const workTasks = [
  { id: 1, title: 'Task 1 - Work', description: 'This is Task 1 for work', completed: false },
  { id: 2, title: 'Task 2 - Work', description: 'This is Task 2 for work', completed: false },
  { id: 3, title: 'Task 3 - Work', description: 'This is Task 3 for work', completed: false },
];

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse request body
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Home route - render the index.ejs template with today's tasks
app.get('/', (req, res) => {
  res.render('index', { pageTitle: "Today's Task List", tasks: todayTasks });
});

// Work route - render the index.ejs template with work tasks
app.get('/work', (req, res) => {
  res.render('index', { pageTitle: "Work Task List", tasks: workTasks });
});

// Create new task - add the new task to the tasks array
app.post('/create', (req, res) => {
  const { title, description } = req.body;
  const newTask = { id: todayTasks.length + 1, title, description, completed: false };
  todayTasks.push(newTask);
  res.redirect('/');
});

// Mark task as completed
app.post('/complete/:id', (req, res) => {
  const taskId = req.params.id;
  const task = todayTasks.find((t) => t.id === parseInt(taskId));
  if (task) {
    task.completed = true;
  }
  res.sendStatus(200);
});

// Delete task
app.post('/delete/:id', (req, res) => {
  const taskId = req.params.id;
  const taskIndex = todayTasks.findIndex((t) => t.id === parseInt(taskId));
  if (taskIndex !== -1) {
    todayTasks.splice(taskIndex, 1);
  }
  res.sendStatus(200);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
