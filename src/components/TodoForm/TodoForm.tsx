import React, { useState } from 'react';
import { useTodoContext } from '../../context/TodoContext'

const TodoForm: React.FC = () => {
  const [task, setTask] = useState('');
  const { addTask } = useTodoContext();

  const handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (task.trim() !== '') {
      addTask(task.trim());
      setTask('');
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input type="text" value={task} onChange={handleTaskChange} placeholder="Enter a new task..." />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TodoForm;