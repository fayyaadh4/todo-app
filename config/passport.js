const passport = require("passport");
const GoogleStrat = require("passport-google-oauth20");
const LocalStrategy = require("passport-local").Strategy;
const keys = require("./keys");
const User = require("../models/user.model");
const Todo = require("../models/todo.model");

//code to serialize and deserialize user
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

//login using google oAuth strategy
passport.use(
  new GoogleStrat(
    {
      //object describing Google strategy setup options for the app
      callbackURL: "/login/redirect",
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret
    },
    //verify callback which verifies user and retrieves user profile information
    (accessToken, refreshToken, profile, done) => {
      console.log("Passport callback function fired");
      console.log(profile);
      User.findOne({ googleID: profile.id }).then(currentUser => {
        if (currentUser) {
          //have this user in our DB
          console.log("new User " + currentUser);
          done(null, currentUser);
        } else {
          //user not saved in DB, so save user
          new User({
            _id: profile._id,
            username: profile.displayName,
            googleID: profile.id
          })
            .save()
            .then(newUser => {
              console.log("new User " + newUser);
              done(null, newUser);
            });
        }
      });
    }
  )
);

//using passport for local login and local signup
passport.use(
  "local",
  new LocalStrategy(
    {
      username: "username",
      passwordField: "password",
      passReqToCallback: true,
      session: false
    },
    function(req, username, password, done) {
      console.log(username);
      console.log(password);
      User.findOne({ username: username }, function(err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false);
        }
        if (user.password != password) {
          return done(null, false);
        }
        //console.log(user);
        return done(null, user);
      });
    }
  )
);

passport.use(
  "local-signup",
  new LocalStrategy(
    {
      username: "username",
      password: "password",
      passReqToCallback: true
    },
    function(req, username, password, done) {
      console.log(username);
      console.log(password); //successfully logs all of these 3
      //console.log(req.body.email);
      process.nextTick(function() {
        User.findOne({ username: username }, function(err, user) {
          if (err) {
            return done(err);
          }
          if (user) {
            return done(null, false, console.log(err));
          } else {
            var newUser = new User({
              username: username,
              password: password
            });
            //filling new user data here
            newUser.save(function(err) {
              if (err) throw err;
              return done(null, newUser);
            });
          }
        });
      });
    }
  )
);
