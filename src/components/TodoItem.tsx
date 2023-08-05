import React from 'react';

interface TodoItemProps {
  task: string;
  completed: boolean;
  onToggleComplete: () => void;
  onDelete: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, completed, onToggleComplete, onDelete }) => {
  return (
    <div >
      <input type="checkbox" checked={completed} onChange={onToggleComplete} />
      <span className={`todo-item ${completed ? 'completed' : ''}`}>{task}</span>
      <button className="delete-btn" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;