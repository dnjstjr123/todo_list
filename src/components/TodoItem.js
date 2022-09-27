import "./TodoItem.css";

const TodoItem = ({ text, checked, id, color, onToggle, onRemove }) => {
  const shouldComponentUpdate = (nextProps, nextState) => {
    return this.props.checked !== nextProps.checked;
  };

  return (
    <div className="todo-item" onClick={() => onToggle(id)}>
      <div
        className="remove"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(id);
        }}
      >
        &times;
      </div>
      <div style={{ color }} className={`todo-text ${checked && "checked"}`}>
        <div>{text}</div>
      </div>
      {checked && <div className="check-mark">✓</div>}
    </div>
  );
};

export default TodoItem;
