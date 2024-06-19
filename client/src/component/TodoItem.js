export default function TodoItem({ index, todo, todos, setTodos }) {
  console.log(`index : ${index}`);
  const removeTodo = () => {
    const newTodos = todos.filter((_, _index) => index !== _index);
    console.log(`newTodos : ${newTodos}`);
    setTodos(newTodos);
  };
  return (
    <li>
      {index + 1} . {todo}
      &nbsp;
      <button onClick={removeTodo}>삭제</button>
    </li>
  );
}
