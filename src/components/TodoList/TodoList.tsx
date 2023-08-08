import TodoItem from '../TodoItem/TodoItem';
import { useTodoContext } from '../../context/TodoContext'
import { TodoListContainer } from './TodoList.styles';


const TodoList: React.FC = () => {
  const { filteredTasks } = useTodoContext();

  return (
    <TodoListContainer>
      {filteredTasks.map(({ id, task, completed }) => (
        <TodoItem
          key={id}
          id={id}
          task={task}
          completed={completed}
        />
      ))}
    </TodoListContainer>
  );
};

export default TodoList;