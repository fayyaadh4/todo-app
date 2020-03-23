import React from "react";
//import Button from 'react-bootstrap/Button';
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

//remove item component
export default function RemoveItem(props) {
  return (
    <div>
      <Button
        className="removeButton"
        variant="contained"
        color="secondary"
        onClick={props.handleRemove}
        startIcon={<DeleteIcon />}
      >
        Remove
      </Button>
    </div>
  );
}
