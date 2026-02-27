const express = require("express");
const app = express();
const { connStr, connection } = require("./Config/database.js");
const { User } = require("./models/user.js");
connection
  .then((clientObj) => {
    console.log("database connection established successfully..!", connStr);
    var db = clientObj.db("devTinder");
    try {
      app.post("/signup", (req, res) => {
        const userObj = {
          firstName: "Rakesh",
          lastName: "Kusuma",
          emailID: "rakesh@kusuma.com",
          password: "rakesh@123",
          gender: "male",
        };
        db.collection("User")
          .insertOne(userObj)
          .then(() => {
            res.send("user added successfully");
          });
      });
    } catch (err) {
      console.error("something went wrong " + err.message);
    }

    app.listen(7776, () => {
      console.log("application server running on port:7776");
    });
  })
  .catch((err) => {
    console.error(err.message);
  })
  .finally(() => {
    console.log("In Finally");
  });
