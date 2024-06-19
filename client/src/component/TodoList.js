import TodoItem from "./TodoItem";

export default function TodoList({ todos, setTodos }) {
  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            index={index}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
}
