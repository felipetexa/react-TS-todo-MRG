import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<{ id: number; task: string; completed: boolean }[]>([]);

  const handleAddTask = (task: string) => {
    setTasks((prevTasks) => [...prevTasks, { id: Date.now(), task, completed: false }]);
  };

  const handleToggleComplete = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="app">
      <h1>Todo App</h1>
      <TodoForm onSubmit={handleAddTask} />
      <TodoList
        tasks={tasks}
        onToggleComplete={handleToggleComplete}
        onDelete={handleDeleteTask}
      />
    </div>
  );
};

export default App;
