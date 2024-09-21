import React from "react";
import TodoItem from "./TodoItem";
import './TodoList.css';

const TodoList = ({ todos }) => {
  if (todos.length === 0) {
    return <p>No results found.</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
