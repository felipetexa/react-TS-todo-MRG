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
        filteredTasks: [],
        setFilter: () => {},
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
describe('TodoItem actions', () => {
test('toggle completion function is called upon checkbox click', async () => {
  renderWithProvider('Task 1');

  const checkbox = screen.getByRole('checkbox');
  fireEvent.click(checkbox);

  expect(toggleCompleteMock).toHaveBeenCalledWith(1);
});

test('edit function is called upon input change and save button clicked', async () => {
  renderWithProvider('Task 1');

  const editButton = screen.getByTestId('edit-button');
  fireEvent.click(editButton);

  const input = screen.getByRole('textbox');
  fireEvent.change(input, { target: { value: 'Updated Task' } });

  const saveButton = screen.getByTestId('save-button');
  fireEvent.click(saveButton);

  expect(updateTaskTextMock).toHaveBeenCalledWith(1, 'Updated Task');
});

test('delete function is called upon click on delete task button', async () => {
  renderWithProvider('Task 1');

  const deleteButton = screen.getByTestId('delete-button');
  fireEvent.click(deleteButton);

  expect(deleteTaskMock).toHaveBeenCalledWith(1);
});
});