import TodoItem from '../TodoItem/TodoItem';
import { useTodoContext } from '../../context/TodoContext'
import { TodoListContainer } from './TodoList.styles';


const TodoList: React.FC = () => {
  const { tasks } = useTodoContext();

  return (
    <TodoListContainer>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          id={task.id}
          task={task.task}
          completed={task.completed}
        />
      ))}
    </TodoListContainer>
  );
};

export default TodoList;