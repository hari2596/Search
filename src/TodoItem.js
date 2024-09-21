import React from "react";

// Component for displaying individual todo item
const TodoItem = ({ todo }) => {
  return (
    <li>
      {todo.title} {todo.completed ? "(Completed)" : "(Pending)"}
    </li>
  );
};

export default TodoItem;
