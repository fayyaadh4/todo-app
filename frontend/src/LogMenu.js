import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

//navigational menu for logged in user
export default class Menu extends Component {
  render() {
    return (
      <div className="menuBar">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>Todo List App</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link
              onClick={() => (window.location = "http://localhost:5000/logout")}
            >
              Sign out
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
