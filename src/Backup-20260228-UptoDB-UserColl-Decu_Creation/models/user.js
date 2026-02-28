const mongoose = require("mongoose");
const { Schema } = mongoose;

//Defining Schema:
// const userSchema = new Schema({
//   firstName: { type: String },
//   lastName: { type: String },
//   password: { type: String },
//   emailID: { type: String },
//   gender: { type: String },
//   age: { type: Number },
// });

//Creating Model
// const User = mongoose.model("User", userSchema);

class User {
  constructor(firstName, lastName, password, emailID, gender, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.emailID = emailID;
    this.gender = gender;
    this.age = age;
  }
}
module.exports = { User };
