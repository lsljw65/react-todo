import { useState } from "react";

export default function TodoItem({
  index,
  todo,
  removeTodo: rt,
  modifyTodo: _modifyTodo,
}) {
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

  const modifyok = () => {
    if (newTodoTitle.trim().length === 0) return;

    _modifyTodo(index, newTodoTitle.trim());
    setEditMode(false);
    /* 완료버튼을 누르면
    수정 텍스트를 입력하여 수정한 후에 수정된 내용을 새로 입력
    app에서 modifyTodo함수를 만듦
    modifyTodo에서는 수정할 현재의 인덱스를 찾아 수정하고 그렇지 않으면 현상태 유지
     */
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
          <button onClick={modifyok}>수정완료</button>
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
