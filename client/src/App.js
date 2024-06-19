import "./App.css";
import React from "react";
import { useState } from "react";
import TodoWriter from "./component/TodoWriter";
import TodoList from "./component/TodoList";
function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(newTitle) {
    if (newTitle.trim().length === 0) return;
    setTodos([...todos, newTitle.trim()]);
  }

  function removeTodo(index) {
    const newTodos = todos.filter((todo, _index) => _index !== index);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <h1>Todos</h1>
      <TodoWriter addTodo={addTodo} />
      <hr />
      <TodoList todos={todos} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
