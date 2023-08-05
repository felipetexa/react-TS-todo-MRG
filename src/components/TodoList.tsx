import React from 'react';
import TodoItem from './TodoItem';

interface TodoListProps {
  tasks: { id: number; task: string; completed: boolean }[];
  onToggleComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ tasks, onToggleComplete, onDelete }) => {
  return (
    <div className="todo-list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task.task}
          completed={task.completed}
          onToggleComplete={() => onToggleComplete(task.id)}
          onDelete={() => onDelete(task.id)}
        />
      ))}
    </div>
  );
};

export default TodoList;