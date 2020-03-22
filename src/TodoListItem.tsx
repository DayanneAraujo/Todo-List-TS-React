import React from "react";
import "./Styles.css";

interface TodoListItemProps {
	todo: Todo;
	toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo }) => {
  return (
    <label className={todo.complete ? "ui teal tag label complete" : "ui tag label"}>
      <input
        className="ui checkbox"
        type="checkbox"
        checked={todo.complete}
        onChange={() => toggleTodo(todo)}/>
      {todo.text}
    </label>
  );
};
