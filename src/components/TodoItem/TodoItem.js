import React from "react";
import "./TodoItem.css";
import { useState } from "react";

function Todo(props) {
  const { content, id } = props;
  const [isDone, setIsDone] = useState(false);

  const styles = {
    textDecoration: isDone ? "line-through" : "", 
    textDecorationColor: isDone ? "#c44536" : "",
    fontStyle: isDone ? "italic" : ""};

  const toggleIsDone = () => setIsDone(!isDone);
  return (
        <div style={styles} onClick={toggleIsDone} id="cross">
          {content}
        <button className="btn btn-danger float-right buttonPos" 
        onClick={() => props.onDelete(id)}
        >
          Sil
          </button>
        </div>
        )
}

export default Todo;