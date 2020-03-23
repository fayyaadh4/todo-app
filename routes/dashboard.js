const router = require("express").Router();
//dashboard route
const authCheck = (req, res, next) => {
  if (!req.user) {
    //if user no logged in
    res.redirect("http://localhost:3000/login");
  } else {
    next();
  }
};

router.get("/dashboard", authCheck, (req, res, next) => {
  console.log(req.user);
  res.send(
    `<h1>Welcome ${req.user.username}, ${req.user._id}!!!</h1><br /><p>To do list: ${req.user.todos}</p>`
  );

  res.status(200).json(req.user);
});

module.exports = router;
