import React from "react";
import Button from "react-bootstrap/Button";

//logout component
export default function Logout(props) {
  return (
    <div>
      <Button
        type="submit"
        name="submit"
        onClick={() => (window.location = "http://localhost:5000/logout")}
      >
        Log out
      </Button>
    </div>
  );
}
