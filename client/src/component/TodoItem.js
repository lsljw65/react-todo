import { useState } from "react";

export default function TodoItem({ index, todo, removeTodo: rt }) {
  console.log(`index : ${index}`);
  const [editMode, setEditMode] = useState(false);
  const [newTodoTitle, setNewTodoTitle] = useState(todo);
  const Change = (e) => {
    setNewTodoTitle(e.target.value);
  };
  const removeTodo = () => {
    rt(index);
  };
  const modifyTodo = () => {
    setEditMode(true);
  };

  const modifyCancel = () => {
    setNewTodoTitle(todo);
    setEditMode(false);
  };

  return (
    <li>
      {index + 1} . &nbsp;
      {editMode ? (
        <>
          <input
            type="text"
            placeholder="할일"
            value={newTodoTitle}
            onChange={Change}
          />
          &nbsp;
          <button onClick={modifyCancel}>수정취소</button>
        </>
      ) : (
        <>
          {todo}
          <button onClick={modifyTodo}>수정</button>
        </>
      )}
      &nbsp; &nbsp;
      <button onClick={removeTodo}>삭제</button>
    </li>
  );
}
