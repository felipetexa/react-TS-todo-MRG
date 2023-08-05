import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('Editing a task', () => {
  render(<App />);

  const inputElement = screen.getByPlaceholderText('Enter a new task...');
  fireEvent.change(inputElement, { target: { value: 'New Task' } });
  fireEvent.submit(inputElement);
  let taskElement = screen.getByText('New Task');

  const editButton = screen.getByRole('button', { name: 'Edit' })

  fireEvent.click(editButton); 

  fireEvent.change(inputElement, { target: { value: 'Edited Task' } });
  fireEvent.submit(inputElement);
  taskElement = screen.getByText('Edited Task');
  
  expect(taskElement).toHaveTextContent('Edited Task')

})