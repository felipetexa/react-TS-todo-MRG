import React, { useState } from 'react';
import { useTodoContext } from '../../context/TodoContext';
import { TodoItemContainer, EditingContainer, CustomInput, TodoItemText, CustomDeleteOutlineIcon, CustomDriveFileRenameOutlineIcon, CustomSaveOutlinedIcon } from './TodoItem.styles';
import Checkbox from '@mui/material/Checkbox';
import { IconButton } from '@mui/material';


interface TodoItemProps {
  task: string;
  completed: boolean;
  id: number;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, completed, id }) => {
  const [editing, setEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);
  const { toggleComplete, deleteTask, updateTaskText } = useTodoContext();

  const handleToggleEditing = () => {
    setEditing(!editing);
  };

  const handleTaskUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTask(event.target.value);
  };

  const handleTaskSave = () => {
    if (editedTask.trim() !== '' && editedTask !== task) {
      setEditing(false);
      updateTaskText(id, editedTask);
    } else {
      setEditing(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleTaskSave();
    }
  };

  return (
    <TodoItemContainer>
      <Checkbox color="success" checked={completed} onChange={() => toggleComplete(id)} style={{
  color: '#D8D8D8'}} />
      {editing ? (
        <EditingContainer>
        <CustomInput
          type="text"
          value={editedTask}
          onChange={handleTaskUpdate}
          onKeyDown={handleKeyDown}
          autoFocus
        />
        <IconButton onClick={handleTaskSave}>
          <CustomSaveOutlinedIcon />
        </IconButton>
        </EditingContainer>
      ) : (
        <TodoItemText className={`todo-item ${completed ? 'completed' : ''}`}>
          {completed ? <s>{editedTask}</s> : editedTask}
        </TodoItemText>

      )}
      <IconButton onClick={handleToggleEditing}>
        <CustomDriveFileRenameOutlineIcon />
      </IconButton>
      <IconButton onClick={() => deleteTask(id)}>
        <CustomDeleteOutlineIcon />
      </IconButton>
    </TodoItemContainer>
  );
};

export default TodoItem;