import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { TodoProvider } from './context/TodoContext';
import { TodoFormContainer } from './App.styles'

const App: React.FC = () => {

  return (
    <TodoProvider>
    <TodoFormContainer>
      <TodoForm />
      <TodoList />
    </TodoFormContainer>
    </TodoProvider>
  );
};

export default App;
