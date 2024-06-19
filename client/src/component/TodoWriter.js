import { useState } from "react";
export default function TodoWriter({ addTodo: at }) {
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const addTodo = () => {
    if (newTodoTitle.trim().length === 0) return;
    at(newTodoTitle);
    setNewTodoTitle("");
  };
  function onChange(e) {
    console.log(e.target.value);
    setNewTodoTitle(e.target.value);
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
    </div>
  );
}
