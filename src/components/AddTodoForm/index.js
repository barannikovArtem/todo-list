import { useState } from "react";

export const AddTodoForm = ({ addTodo }) => {
  const [todoTitle, setTodoTitle] = useState("");

  const handleChange = ({ currentTarget }) => {
    setTodoTitle(currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todoTitle);
    setTodoTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={todoTitle} onChange={handleChange}></input>
      <button className="todo-list__button">Add</button>
    </form>
  );
};
