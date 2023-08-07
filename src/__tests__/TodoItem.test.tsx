import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TodoContext } from '../context/TodoContext';
import TodoItem from '../components/TodoItem';

const addTaskMock = jest.fn();
const toggleCompleteMock = jest.fn();
const deleteTaskMock = jest.fn();
const updateTaskTextMock = jest.fn();

const renderWithProvider = (task: string) => {
  return render(
    <TodoContext.Provider
      value={{
        tasks: [{ id: 1, task: task, completed: false }],
        addTask: addTaskMock,
        toggleComplete: toggleCompleteMock,
        deleteTask: deleteTaskMock,
        updateTaskText: updateTaskTextMock,
      }}
    >
      <TodoItem id={1} task={task} completed={false} />
    </TodoContext.Provider>
  );
};

test('TodoItem toggles completion status', async () => {
  renderWithProvider('Task 1');

  const checkbox = screen.getByRole('checkbox');
  fireEvent.click(checkbox);

  expect(toggleCompleteMock).toHaveBeenCalledWith(1);
});

test('TodoItem edits task', async () => {
  renderWithProvider('Task 1');

  const editButton = screen.getByTestId('edit-button');
  fireEvent.click(editButton);

  const input = screen.getByRole('textbox');
  fireEvent.change(input, { target: { value: 'Updated Task' } });

  const saveButton = screen.getByTestId('save-button');
  fireEvent.click(saveButton);

  expect(updateTaskTextMock).toHaveBeenCalledWith(1, 'Updated Task');
});

test('TodoItem deletes task', async () => {
  renderWithProvider('Task 1');

  const deleteButton = screen.getByTestId('delete-button');
  fireEvent.click(deleteButton);

  expect(deleteTaskMock).toHaveBeenCalledWith(1);
});
