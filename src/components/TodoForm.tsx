import React, { useState } from 'react';

interface TodoFormProps {
  onSubmit: (task: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onSubmit }) => {
  const [task, setTask] = useState('');

  const handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (task.trim() !== '') {
      onSubmit(task.trim());
      setTask('');
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input type="text" value={task} onChange={handleTaskChange} placeholder="Enter a new task..." />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TodoForm;