import { useState } from "react";

export default function TodoWriter() {
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [todos, setTodos] = useState([]);
  function onChange(e) {
    console.log(e.target.value);
    setNewTodoTitle(e.target.value);
  }

  function addTodo() {
    setTodos([...todos, newTodoTitle]);
    setNewTodoTitle("");
  }
  return (
    <div>
      <div className="todo-write">
        <input
          type="text"
          placeholder="새 할일을 입력해주세요."
          value={newTodoTitle}
          onChange={onChange}
        />
        &nbsp;
        <button onClick={addTodo}>할 일 추가</button>
      </div>

      <hr />
      <div>{JSON.stringify(todos)}</div>
    </div>
  );
}
