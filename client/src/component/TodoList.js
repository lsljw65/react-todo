import TodoItem from "./TodoItem";

export default function TodoList({ todos, removeTodo, modifyTodo }) {
  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            index={index}
            todo={todo}
            removeTodo={removeTodo}
            modifyTodo={modifyTodo}
          />
        ))}
      </ul>
    </div>
  );
}
