import { useState, useEffect } from "react";
import "./styles.css";
import { Todo } from "./components/Todo";
import { AddTodoForm } from "./components/AddTodoForm";

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("localTodos")) {
      const localStorageTodos = JSON.parse(localStorage.getItem("localTodos"));
      setTodos(localStorageTodos);
    }
  }, []);

  const addTodo = (todoTitle) => {
    if (todoTitle) {
      const newTodo = {
        id: Date.now(),
        title: todoTitle,
        complete: false
      };

      setTodos([...todos, newTodo]);
      localStorage.setItem("localTodos", JSON.stringify([...todos, newTodo]));
    }
  };

  const deleteTodo = (id) => {
    const filtredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filtredTodos);
    localStorage.setItem("localTodos", JSON.stringify(filtredTodos));
  };

  return (
    <div className="app">
      <ul className="todo-list">
        {todos.map((todo) => {
          return <Todo todo={todo} deleteTodo={deleteTodo} />;
        })}
        <li className="todo-list__item">
          <AddTodoForm addTodo={addTodo} />
        </li>
      </ul>
    </div>
  );
}
