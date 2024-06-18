import "./App.css";
import React from "react";
import TodoWriter from "./component/TodoWriter";

function App() {
  return (
    <div className="App">
      <h1>Todos</h1>
      <TodoWriter />
    </div>
  );
}

export default App;
