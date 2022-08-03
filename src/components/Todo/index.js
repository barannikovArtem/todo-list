export const Todo = ({ todo, deleteTodo }) => {
  return (
    <li key={todo.id} className="todo-list__item">
      <p>{todo.title}</p>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};
