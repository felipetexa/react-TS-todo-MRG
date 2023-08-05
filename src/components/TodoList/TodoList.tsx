import TodoItem from '../TodoItem/TodoItem';
import { useTodoContext } from '../../context/TodoContext'


const TodoList: React.FC = () => {
  const { tasks } = useTodoContext();

  return (
    <div className="todo-list">
      {tasks.map((task) => (
        <TodoItem
          id={task.id}
          task={task.task}
          completed={task.completed}
        />
      ))}
    </div>
  );
};

export default TodoList;