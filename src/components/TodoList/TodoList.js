import React from "react";
import Todo from "../TodoItem/TodoItem";
import "./TodoList.css";

function TodoList(props) {
  return (
    <div>
      <ul>
        {props.todos.map((todo) => {
          return (
            <li className="list-group-item" >
              <Todo {...todo} key={todo.id} onDelete={props.onDelete}/>             
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;