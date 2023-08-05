import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('Toggling completion on a task', () => {
  render(<App />);

  const inputElement = screen.getByPlaceholderText('Enter a new task...');
  fireEvent.change(inputElement, { target: { value: 'New Task' } });
  fireEvent.submit(inputElement);

  // const taskText = screen.getByText('New Task');
  const checkbox = screen.getByRole('checkbox')

  fireEvent.click(checkbox);

  
  const completedTask = screen.getByText('New Task');
  expect(completedTask).toHaveClass('completed');


})