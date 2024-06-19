import "./App.css";
import React from "react";
import { useState } from "react";
import TodoWriter from "./component/TodoWriter";
import TodoList from "./component/TodoList";
function App() {
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
    if (newTodoTitle.trim().length === 0) return;
    setTodos([...todos, newTodoTitle]);
    setNewTodoTitle("");
  }

  return (
    <div className="App">
      <h1>Todos</h1>
      <TodoWriter
        newTodoTitle={newTodoTitle}
        setNewTodoTitle={setNewTodoTitle}
        addTodo={addTodo}
      />
      <hr />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
