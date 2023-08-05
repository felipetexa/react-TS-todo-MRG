import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('Adding a new task', () => {
  render(< App />);

  const inputElement = screen.getByPlaceholderText('Enter a new task...');

  fireEvent.change(inputElement, {target: {value: 'New Task'}})
  fireEvent.submit(inputElement);

  const taskElement = screen.getByText('New Task');

  expect(taskElement).toBeInTheDocument();

})