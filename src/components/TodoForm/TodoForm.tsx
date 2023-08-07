import React, { useState } from 'react';
import { useTodoContext } from '../../context/TodoContext';
import { IconButton } from '@mui/material';
import { CustomAddIcon, CustomFilterIcon, InputTask, TodoFormContainer, InputContainer, TitleFilterContainer } from './TodoForm.styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const TodoForm: React.FC = () => {
  const [task, setTask] = useState('');
  const { addTask, setFilter } = useTodoContext();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
      <TitleFilterContainer>
      <h1 style={{marginRight: '10rem'}}>ToDo App</h1>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <CustomFilterIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => { setFilter('all'); handleClose(); }}>All tasks</MenuItem>
        <MenuItem onClick={() => { setFilter('completed'); handleClose(); }}>Completed</MenuItem>
        <MenuItem onClick={() => { setFilter('incomplete'); handleClose(); }}>Incomplete</MenuItem>
      </Menu>
      </TitleFilterContainer>
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