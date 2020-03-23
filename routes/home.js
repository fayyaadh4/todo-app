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

//GET request which  calls findAll function
router.get("/home", authCheck, Todo.getUser);

module.exports = router;
