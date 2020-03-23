import React from "react";
import RemoveItem from "./RemoveItem";
import ListGroup from "react-bootstrap/ListGroup";
import AssignmentIcon from "@material-ui/icons/Assignment";

//to do list displaying mapping todo array to display each todo item in a list
export default function GetToDoList(props) {
  console.log(props.todos);
  return (
    <div>
      <h2>To do's</h2>
      <ListGroup variant="flush">
        {props.todos.map(todo => (
          <ListGroup.Item
            key={todo._id}
            style={{
              fontFamily: "Open Sans",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "30px"
            }}
          >
            <AssignmentIcon style={{ marginRight: "8px" }}></AssignmentIcon>
            {todo.text}
            <br></br>
            <RemoveItem
              className="ml-auto"
              handleRemove={() => props.handleRemove(todo._id)}
            ></RemoveItem>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

/*

            
*/
