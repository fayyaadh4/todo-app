const mongoose = require("mongoose");
const todo = require("./todo.model");

//user model for new user
//get todos data from todoModel by referencing it
const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true, lowercase: true },
  googleID: { type: String },
  username: { type: String },
  password: { type: String },
  todos: [{ type: mongoose.Schema.Types.ObjectId, ref: "todo" }]
});

let User = mongoose.model("user", UserSchema);
module.exports = User;
