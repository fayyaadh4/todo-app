const mongoose = require("mongoose");
const user = require("./user.model");

//todo model
//gets user from object id of specific user logged in
let TodoSchema = new mongoose.Schema({
  text: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" }
});

let Todo = mongoose.model("todo", TodoSchema);
module.exports = Todo;
