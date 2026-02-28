const express = require("express");
const app = express();
const { conStr, con } = require("./Config/database.js");
con
  .then((clientObj) => {
    app.listen(7777, () => {
      console.log("app running on 7777");
    });
    const userObj = {
      firstName: "Narendra",
      lastName: "Modi",
      emailID: "modi@n.com",
      password: "modi@123",
      gender: "male",
    };
    var db = clientObj.db("devTinder");
    app.post("/signup", (req, res) => {
      try {
        db.collection("User")
          .insertOne(userObj)
          .then(() => {
            console.log("done insertion");
          });
        res.send("data inserted successfully.");
      } catch (err) {
        console.error(err.message);
      }
    });
  })
  .catch((err) => {
    console.log("Error in conn");
  });
