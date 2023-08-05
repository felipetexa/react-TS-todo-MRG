import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('Deleting a task', () => {
  render(<App />);

  const inputElement = screen.getByPlaceholderText('Enter a new task...');
  fireEvent.change(inputElement, { target: { value: 'New Task' } });
  fireEvent.submit(inputElement);
  const taskElement = screen.getByText('New Task');

  const deleteButton = screen.getByRole('button', { name: 'Delete' })

  fireEvent.click(deleteButton); 
  
  expect(taskElement).not.toBeInTheDocument()

})