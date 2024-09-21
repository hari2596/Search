import React from "react";
import TodoItem from "./TodoItem";

// Component for displaying the list of todos
const TodoList = ({ todos }) => {
  if (todos.length === 0) {
    return <p>No results found.</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
