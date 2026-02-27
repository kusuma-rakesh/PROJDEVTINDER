const mongoose = require("mongoose");
const { Schema } = mongoose;

//Defining Schema:
const userSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  password: { type: String },
  emailID: { type: String },
  gender: { type: String },
  age: { type: Number },
});

//Creating Model
const User = mongoose.model("User", userSchema);
module.exports = { User };
