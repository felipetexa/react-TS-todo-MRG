import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { TodoProvider } from './context/TodoContext';
import { TodoFormContainer } from './App.styles'

const App: React.FC = () => {

  return (
    <TodoProvider>
    <TodoFormContainer>
      <h1>ToDo App</h1>
      <TodoForm />
      <TodoList />
    </TodoFormContainer>
    </TodoProvider>
  );
};

export default App;
