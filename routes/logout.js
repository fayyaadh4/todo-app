const router = require("express").Router();

//logout route which logs user out of session and removes cookie
router.get("/logout", (req, res) => {
  req.logout();
  req.session = null;
  res.redirect("http://localhost:3000/");
});

module.exports = router;
