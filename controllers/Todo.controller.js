const mongoose = require("mongoose");
const Todo = require("../models/todo.model");
const User = require("../models/user.model");

//gets the user by finding the user by id
exports.getUser = (req, res, next) => {
  Todo.find({ user: req.user._id }, function(err, user) {
    if (err) {
      err => next(err);
    }
    res.json(req.user);
  });
};

//gets all todos and returns them
exports.getTodos = (req, res, next) => {
  //Todo.populated('todo');
  //console.log(req.user.todos);
  Todo.find({ user: req.user._id }, function(err, user) {
    //.then(result => res.json(result))
    if (err) {
      err => next(err);
    }
    //console.log(user)
    res.json(user);
  });
};

//function which creates todo's using todo model and saves them using mongooses 'save()' function
exports.create = async (req, res) => {
  //console.log(req.body)
  //console.log(JSON.stringify(req.body))
  //console.log(JSON.stringify(req.body.text))
  const text = req.body.text;
  if (!text) {
    res.status(400);
    res.json({ error: "Invalid data" });
  }
  try {
    const newTodo = await Todo({
      text: text,
      //completed: false,
      user: req.user._id
    });
    //console.log(newTodo);

    const todo = await newTodo.save();
    res.json(todo);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server error");
  }
};

//removes to do item by finding the id of the specific item and entering it as a parameter
exports.deleteById = (req, res, next) => {
  //console.log(req.params);
  const id = req.params._id;

  Todo.findByIdAndRemove({ _id: id }, (err, response) => {
    if (err) {
      res.send(err);
    } else {
      res.send({ id: id });
    }
  });
};
