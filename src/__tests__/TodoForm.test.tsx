import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TodoForm from '../components/TodoForm/TodoForm';
import { TodoContext } from '../context/TodoContext';


test('TodoForm submits task to context', () => {
  const addTaskMock = jest.fn();
  const toggleCompleteMock = jest.fn();
  const deleteTaskMock = jest.fn();
  const updateTaskTextMock = jest.fn();

  render(
    <TodoContext.Provider
      value={{
        tasks: [],
        addTask: addTaskMock,
        toggleComplete: toggleCompleteMock,
        deleteTask: deleteTaskMock,
        updateTaskText: updateTaskTextMock,
      }}
    >
      <TodoForm />
    </TodoContext.Provider>
  );

  const input = screen.getByPlaceholderText('Enter a new task...');
  const addButton = screen.getByTestId('add-button');

  fireEvent.change(input, { target: { value: 'New Task' } });
  fireEvent.click(addButton);

  expect(addTaskMock).toHaveBeenCalledWith('New Task');
});