import React from "react";
import GetToDoList from "./GetToDoList";
import Welcome from "./Welcome";
import LogMenu from "../LogMenu";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    //let text state equal empty string
    this.state = {
      text: "",
      user: [],
      todos: []
    };
  }
  componentDidMount() {
    this.getUser();
    this.getToDoList();
  }

  //componentDidUpdate() {
  //this.getUser();
  //this.getToDoList();
  //}

  //function which gets user logged in
  getUser = async () => {
    await fetch("http://localhost:3000/home")
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          user: res
        });
      });
  };

  //function which gets list of todos from DB
  getToDoList = async () => {
    await fetch("http://localhost:3000/todo")
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          todos: res
        });
      });
  };

  //handle event so that when input is changed state will be changed
  handleChange = event => {
    event.preventDefault();
    this.setState(
      {
        text: event.target.value
      },
      () => console.log(this.state.text)
    );
  };

  //allow clicking submit to change state
  handleSubmit = async e => {
    console.log(this.state.text);
    e.preventDefault();
    //submit form
    await fetch("/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text: this.state.text })
    })
      .then(res => res.json())
      .then(this.getUser())
      .then(this.getToDoList())
      .then(
        this.setState({
          text: ""
        })
      );
  };

  //function which handles removal of an item
  handleRemove = async todoId => {
    console.log(todoId);
    await fetch(`/delete/${todoId}`)
      .then(res => res.json())
      .then(this.getUser())
      .then(this.getToDoList());
  };

  //return todo form containing input field and submit button and their functions
  render() {
    return (
      <div>
        <LogMenu></LogMenu>
        <Welcome user={this.state.user}></Welcome>
        <form className="todoForm">
          <InputGroup>
            <FormControl
              id="text"
              type="text"
              name="text"
              value={this.state.text}
              onChange={this.handleChange}
              placeholder="todo..."
            ></FormControl>
            <Button type="submit" value="submit" onClick={this.handleSubmit}>
              Add Todo
            </Button>
          </InputGroup>
        </form>
        <GetToDoList
          todos={this.state.todos}
          handleRemove={this.handleRemove}
        ></GetToDoList>
      </div>
    );
  }
}
