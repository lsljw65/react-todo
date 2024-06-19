import TodoItem from "./TodoItem";

export default function TodoList({ todos, removeTodo }) {
  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            index={index}
            todo={todo}
            removeTodo={removeTodo}
          />
        ))}
      </ul>
    </div>
  );
}
