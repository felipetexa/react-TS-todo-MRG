import React, { useState } from 'react';
import { useTodoContext } from '../../context/TodoContext';
import { IconButton } from '@mui/material';
import { CustomAddIcon, InputTask } from './TodoForm.styles';

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
      <InputTask type="text" value={task} onChange={handleTaskChange} placeholder="Enter a new task..." />
      <IconButton type="submit">
      <CustomAddIcon />
      </IconButton>
        
    </form>
  );
};

export default TodoForm;