const express = require("express");
const app = express();
const { conStr, con } = require("./Config/database.js");
const { User } = require("./models/user.js");
app.use(express.json());
con
  .then((clientObj) => {
    app.listen(7777, () => {
      console.log("app running on 7777");
    });

    // const newUser = new User(
    //   "Sachin",
    //   "Tendulkar",
    //   "sachin@T.com",
    //   "sachint@123",
    //   "male",
    // );
    // const userObj = {
    //   firstName: "Narendra",
    //   lastName: "Modi",
    //   emailID: "modi@n.com",
    //   password: "modi@123",
    //   gender: "male",
    // };

    var db = clientObj.db("devTinder");
    app.post("/signup", (req, res) => {
      try {
        const newUser = new User(
          req.body.firstName,
          req.body.lastName,
          req.body.emailID,
          req.body.password,
          req.body.gender,
          req.body.age,
        );
        db.collection("User")
          .insertOne(newUser)
          .then(() => {
            console.log("done insertion");
          });
        res.send("data inserted successfully from Postman.");
      } catch (err) {
        console.error(err.message);
      }
    });
  })
  .catch((err) => {
    console.log("Error in conn", err.message);
  });
