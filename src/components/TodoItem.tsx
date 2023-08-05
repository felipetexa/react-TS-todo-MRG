import React, { useState } from 'react';

interface TodoItemProps {
  task: string;
  completed: boolean;
  onToggleComplete: () => void;
  onDelete: () => void;
  updateTaskText: (newTaskText: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, completed, onToggleComplete, onDelete, updateTaskText }) => {

  const [editing, setEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleToggleEditing = () => {
    setEditing(!editing);
  };

  const handleTaskUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTask(event.target.value);
  };

  const handleTaskSave = () => {
    if (editedTask.trim() !== '' && editedTask !== task) {

      setEditing(false);

      updateTaskText(editedTask);
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
    <div  className="todo-item-container">
      <input type="checkbox" checked={completed} onChange={onToggleComplete} />
      {editing ? (
        <div>
        <input
          type="text"
          value={editedTask}
          onChange={handleTaskUpdate}
          onKeyDown={handleKeyDown}
          autoFocus
        />
        <button className="save-btn" onClick={handleTaskSave}>
          Save
        </button>
        </div>
      ) : (
        <span className={`todo-item ${completed ? 'completed' : ''}`}>
          {completed ? <s>{editedTask}</s> : editedTask}
        </span>

      )}
      <button className="edit-btn" onClick={handleToggleEditing}>
        Edit
      </button>
      <button className="delete-btn" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;