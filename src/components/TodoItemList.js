import TodoItem from "./TodoItem";

const TodoItemList = ({ todos, onToggle, onRemove }) => {
  const shouldComponentUpdate = (nextProps, nextState) => {
    return this.props.todos !== nextProps.todos;
  };
  const todoList = todos.map(({ id, text, checked }) => (
    <TodoItem
      id={id}
      text={text}
      checked={checked}
      onToggle={onToggle}
      onRemove={onRemove}
      key={id}
    />
  ));

  return <div>{todoList}</div>;
};

export default TodoItemList;
