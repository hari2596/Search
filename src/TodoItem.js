import React from "react";
import './TodoItem.css';

const TodoItem = ({ todo }) => {
  return (
    <li className="todo-item">
      {todo.title} <span className={todo.completed ? "completed" : "pending"}>
        {todo.completed ? "(Completed)" : "(Pending)"}
      </span>
    </li>
  );
};

export default TodoItem;
