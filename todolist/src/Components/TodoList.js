import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  //let state equal an empty array string
  state = {
    todos: []
  };
  //add todo to array of todos strings
  addTodo = todo => {
    this.setState({
      todos: [todo, ...this.state.todos]
    });
  };

  //change complete from false to true if the todo id equals id
  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          //supposed to update
          return {
            id: todo.id,
            text: todo.text,
            complete: !todo.complete
          };
        } else {
          return todo;
        }
      })
    });
  };

  //function which deletes todo whhen button is clicked
  handleDeleteTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  //return and render todo list
  render() {
    return (
      <div>
        <ul>
          <TodoForm onSubmit={this.addTodo}></TodoForm>
          {this.state.todos.map(todo => (
            <li style={{ textAlign: "center" }} key={todo.id}>
              <Todo
                toggleComplete={() => this.toggleComplete(todo.id)}
                onDelete={() => this.handleDeleteTodo(todo.id)}
                todo={todo}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
