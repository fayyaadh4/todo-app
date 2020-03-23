import React from "react";
import Menu from "../Menu";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

//home page requesting user to log in or register
export default function home() {
  return (
    <div>
      <Menu></Menu>
      <Jumbotron>
        <h1>Welcome!!</h1>
        <p>
          This is a simple Todo list app created using React.js for the frontend
          and Node, Express and Mongoose for the backend.
        </p>
        <p>
          <Button variant="primary" href="/login">
            Proceed to sign in
          </Button>
        </p>
      </Jumbotron>
    </div>
  );
}
