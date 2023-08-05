import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';

interface TodoListProps {
  tasks: { id: number; task: string; completed: boolean }[];
  onToggleComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ tasks, onToggleComplete, onDelete }) => {

  const [allTasks, setAllTasks] = useState(tasks);

  useEffect(() => {
    setAllTasks(tasks);
  }, [tasks]);


  const updateTask = (taskId: number, newTaskText: string) => {
    setAllTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, task: newTaskText } : task
      )
    );
  };
  return (
    <div className="todo-list">
      {allTasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task.task}
          completed={task.completed}
          onToggleComplete={() => onToggleComplete(task.id)}
          onDelete={() => onDelete(task.id)}
          updateTaskText={(newTaskText) => updateTask(task.id, newTaskText)}
        />
      ))}
    </div>
  );
};

export default TodoList;