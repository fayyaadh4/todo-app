const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const logger = require("morgan");
const cors = require("cors");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const helmet = require("helmet");

const app = express();

app.use(helmet());

//cookie parser middleware
const cookieParser = require("cookie-parser");

app.use(cookieParser("secret"));
//maximum age of cookie (in ms) and cookie key stored in config/keys. stores cookie
app.use(
  cookieSession({ maxAge: 24 * 60 * 60 * 1000, keys: [keys.session.cookieKey] })
);
//initialises the authentication module
app.use(passport.initialize());
//alters the request object and changes the 'user' value that is currently the session id(from client cookie)
//into the true deserialized user object
app.use(passport.session());
const passportSetup = require("./config/passport");

app.use(logger("dev"));
// Initialize Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//enables cross-origin transfer
//app.use(cors());
app.options("*", cors());

//Routes for the app
const authRoutes = require("./routes/auth");
const dashboard = require("./routes/dashboard");
const logout = require("./routes/logout");
const newTodo = require("./routes/newTodo");
const home = require("./routes/home");
const todo = require("./routes/todos");
const remove = require("./routes/delete");

//set up routes using middleware '.use()'
app.use(authRoutes);
app.use(home);
app.use(newTodo);
app.use(todo);
app.use(dashboard);
app.use(logout);
app.use(remove);

mongoose.connect(
  keys.mongoDB.dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => {
    console.log("Connected to MongoDB");
  }
);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`App is listening on port ${port}`));
