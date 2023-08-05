import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { TodoProvider } from './context/TodoContext';

const App: React.FC = () => {

  return (
    <TodoProvider>
    <div className="app">
      <h1>Todo App</h1>
      <TodoForm />
      <TodoList />
    </div>
    </TodoProvider>
  );
};

export default App;
