import React, { useState } from 'react';
import { useTodoContext } from '../../context/TodoContext';
import { IconButton } from '@mui/material';
import { CustomAddIcon, InputTask, TodoFormContainer, InputContainer } from './TodoForm.styles';

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
    <TodoFormContainer>
      <h1>ToDo App</h1>
    <form className="todo-form" onSubmit={handleSubmit}>
    <InputContainer>
      <InputTask type="text" value={task} onChange={handleTaskChange} placeholder="Enter a new task..." />
      <IconButton type="submit" data-testid="add-button">
      <CustomAddIcon />
      </IconButton>
      </InputContainer>
    </form>
    </TodoFormContainer>
  );
};

export default TodoForm;