import express from 'express';
const router = express.Router();

interface Task {
  id: number;
  task: string;
  completed: boolean;
  userId: string;
}

let tasks: Task[] = [];

router.get('/', (req, res) => {
  res.json(tasks);
});

router.post('/', (req, res) => {
  const { task } = req.body;
  const newTask: Task = {
    id: tasks.length + 1,
    task,
    completed: false,
    userId: generateUserId()
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

router.patch('/:id/complete', (req, res) => {
  const { id } = req.params;
  const taskToUpdate = tasks.find((t) => t.id === parseInt(id));
  
  if (!taskToUpdate) {
    return res.status(404).json({ message: 'Task not found' });
  }
  
  taskToUpdate.completed = !taskToUpdate.completed;
  
  res.json(taskToUpdate);
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

function generateUserId(): string {
  const userId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  return userId;
}

export default router;
