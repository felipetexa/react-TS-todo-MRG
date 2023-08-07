import React, { createContext, useContext, useState, useEffect } from 'react';

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

interface TodoContextValue {
  tasks: Todo[];
  filteredTasks: Todo[];
  addTask: (task: string) => Promise<void>;
  toggleComplete: (taskId: number) => Promise<void>;
  deleteTask: (taskId: number) => Promise<void>;
  updateTaskText: (taskId: number, newTaskText: string) => Promise<void>;
  setFilter: (filter: string) => void;
}

interface ContextProviderProps {
  children: React.ReactNode;
}

export const TodoContext = createContext<TodoContextValue>({
  tasks: [],
  filteredTasks: [],
  addTask: () => Promise.resolve(),
  toggleComplete: () => Promise.resolve(),
  deleteTask: () => Promise.resolve(),
  updateTaskText: () => Promise.resolve(),
  setFilter: () => {},
});

export const useTodoContext = () => useContext(TodoContext);

const API_BASE_URL = 'https://react-ts-todo-mrg-api.vercel.app';

export const TodoProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Todo[]>([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/tasks`)
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') {
      return task.completed;
    } else if (filter === 'incomplete') {
      return !task.completed;
    } else {
      return true;
    }
  });

  const addTask = async (task: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/tasks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ task }),
      });

      if (response.ok) {
        const newTask = await response.json();
        setTasks(prevTasks => [...prevTasks, newTask]);
      }
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const toggleComplete = async (taskId: number) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/tasks/${taskId}/complete`, {
        method: 'PATCH',
      });

      if (response.ok) {
        setTasks(prevTasks =>
          prevTasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
          )
        );
      }
    } catch (error) {
      console.error('Error toggling complete:', error);
    }
  };

  const deleteTask = async (taskId: number) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/tasks/${taskId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const updateTaskText = async (taskId: number, newTaskText: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/tasks/${taskId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ task: newTaskText }),
      });

      if (response.ok) {
        setTasks(prevTasks =>
          prevTasks.map(task =>
            task.id === taskId ? { ...task, task: newTaskText } : task
          )
        );
      }
    } catch (error) {
      console.error('Error updating task text:', error);
    }
  };

  return (
    <TodoContext.Provider
      value={{ tasks, filteredTasks, addTask, toggleComplete, deleteTask, updateTaskText, setFilter }}
    >
      {children}
    </TodoContext.Provider>
  );
};
