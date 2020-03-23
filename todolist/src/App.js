import React from "react";
import "./App.css";
import Home from "./Pages/home";
import TodoList from "./Components/TodoList";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

//main App which contains all routes necessary for app and all styling links
//render TodoList component to app
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <Router>
          <Switch>
            <Route exact={true} path="/" component={Home}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/todolist" component={TodoList}></Route>
            <Route path="/register" component={Register}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
