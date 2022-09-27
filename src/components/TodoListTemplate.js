import "./TodoListTemplate.css";
const TodoListTemplate = ({ form, children, palette }) => {
  return (
    <main className="todo-list-template">
      <div className="title">
        <h4>오늘 할 일</h4>
      </div>
      <section className="palette-wrapper">{palette}</section>
      <section className="form-wrapper">{form}</section>
      <section className="todos-wrapper">{children}</section>
    </main>
  );
};

export default TodoListTemplate;
