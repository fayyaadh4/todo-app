const router = require("express").Router();
const Todo = require("../controllers/Todo.controller");

//new todo router which calls create function from todo controller

const authCheck = (req, res, next) => {
  if (!req.user) {
    //if user no logged in
    res.redirect("http://localhost:3000/login");
  } else {
    next();
  }
};

router.post("/add", authCheck, Todo.create);

module.exports = router;
