import React from "react";

//add remove button with function onDelete
export default props => (
  <div style={{ display: "flex", justifyContent: "left" }}>
    <div onClick={props.toggleComplete}>{props.todo.text}</div>
    <button className="removeButton" onClick={props.onDelete}>
      x
    </button>
  </div>
);
