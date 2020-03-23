const router = require("express").Router();
const Todo = require("../controllers/Todo.controller");

//delete function which deletes specific item by its id parameter

const authCheck = (req, res, next) => {
  if (!req.user) {
    //if user no logged in
    res.redirect("http://localhost:3000/login");
  } else {
    next();
  }
};

router.get("/delete/:_id", authCheck, Todo.deleteById);

module.exports = router;
