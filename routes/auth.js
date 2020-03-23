const router = require("express").Router();
const passport = require("passport");

//route for google login
router.get("/login", passport.authenticate("google", { scope: ["profile"] }));

//route for local login
router.post(
  "/local",
  passport.authenticate("local", {
    failureRedirect: "http://localhost:3000/login"
  }),
  (req, res) => {
    res.redirect("http://localhost:3000/todolist");
  }
);

//route for local signup
router.post(
  "/signup",
  passport.authenticate("local-signup", {
    successRedirect: "http://localhost:3000/todolist",
    failureRedirect: "/signup"
  })
);

//redirects to react to do list app after authentication
router.get("/login/redirect", passport.authenticate("google"), (req, res) => {
  res.redirect("http://localhost:3000/todolist");
  // if this gets called then authentication was successful
  // res.cookie('session', req.user.id, { secure: true, signed: true, expires: new Date(Date.now() + 3600) });
  //res.send('Callback URI' + req.user);
});

module.exports = router;
