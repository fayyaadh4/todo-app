import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

//navigational menu for logged out user
export default class Menu extends Component {
  render() {
    return (
      <div className="menuBar">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>Todo List App</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/login">Log in</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
