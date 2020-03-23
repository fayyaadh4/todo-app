const router = require("express").Router();
const Todo = require("../controllers/Todo.controller");

const authCheck = (req, res, next) => {
  if (!req.user) {
    //if user no logged in
    res.redirect("http://localhost:3000/login");
  } else {
    next();
  }
};

//route which calls function which gets todo items and returns it
router.get("/todo", authCheck, Todo.getTodos);

module.exports = router;
