export default function TodoWriter({ newTodoTitle, setNewTodoTitle, addTodo }) {
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
