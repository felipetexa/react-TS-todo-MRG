import React, { createContext, useContext, useState } from 'react';

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

interface TodoContextValue {
  tasks: Todo[];
  addTask: (task: string) => void;
  toggleComplete: (taskId: number) => void;
  deleteTask: (taskId: number) => void;
  updateTaskText: (taskId: number, newTaskText: string) => void;
}

interface ContextProviderProps {
  children: React.ReactNode;
}

const TodoContext = createContext<TodoContextValue>({
  tasks: [],
  addTask: () => {},
  toggleComplete: () => {},
  deleteTask: () => {},
  updateTaskText: () => {},
});

export const useTodoContext = () => useContext(TodoContext);

export const TodoProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Todo[]>([]);

  const addTask = (task: string) => {
    setTasks((prevTasks) => [...prevTasks, { id: Date.now(), task, completed: false }]);
  };

  const toggleComplete = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task))
    );
  };

  const deleteTask = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const updateTaskText = (taskId: number, newTaskText: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === taskId ? { ...task, task: newTaskText } : task))
    );
  };

  return (
    <TodoContext.Provider
      value={{ tasks, addTask, toggleComplete, deleteTask, updateTaskText }}
    >
      {children}
    </TodoContext.Provider>
  );
};
