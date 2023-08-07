import express from 'express';
const router = express.Router();

let tasks: { id: number; task: string; completed: boolean }[] = [];

router.get('/', (req, res) => {
  res.json(tasks);
});

router.post('/', (req, res) => {
  const { task } = req.body;
  const newTask = { id: tasks.length + 1, task, completed: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { task, completed } = req.body;
  const taskToUpdate = tasks.find((t) => t.id === parseInt(id));
  if (!taskToUpdate) {
    return res.status(404).json({ message: 'Task not found' });
  }
  taskToUpdate.task = task || taskToUpdate.task;
  taskToUpdate.completed = completed !== undefined ? completed : taskToUpdate.completed;
  res.json(taskToUpdate);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  tasks = tasks.filter((t) => t.id !== parseInt(id));
  res.sendStatus(204);
});

export default router;
