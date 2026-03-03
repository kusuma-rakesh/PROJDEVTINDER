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
    //Insert data from postman - body - raw - json
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
            res.redirect("/feedUsers");
          });
        //res.send("data inserted successfully from Postman.");
      } catch (err) {
        console.error(err.message);
      }
    });

    //findAll
    app.get("/feedUsers", (req, res) => {
      //Fetch all users
      db.collection("User")
        .find({})
        .toArray()
        .then((result) => {
          res.send(result);
        });
    });

    //fineOne
    try {
      //Fetch required user
      app.get("/getUser", (req, res) => {
        const fName = req.body.firstName;
        //const fName = req.query.firstName; // http://127.0.0.1:7777/getUser?firstName=Rakesh
        console.log("FirstName:=", fName);

        db.collection("User")
          .findOne({ firstName: fName })
          //   .toArray()
          .then((result) => {
            if (!result) {
              res.status(404).send("User Not Found");
            } else {
              res.send(result);
            }
          });
      });
    } catch (err) {
      console.error("Something Went Wrong", err.message);
    }

    //Delete
    try {
      //Delete a user
      app.delete("/deleteUser", (req, res) => {
        const fName = req.body.firstName;
        //const fName = req.query.firstName; // http://127.0.0.1:7777/getUser?firstName=Rakesh
        console.log("FirstName:=", fName);

        db.collection("User")
          .deleteOne({ firstName: fName })
          //   .toArray()
          .then(() => {
            console.log(`${fName}  - Delete successfully.`);
            res.redirect("/feedUsers");
          });
      });
    } catch (err) {
      console.error("Something Went Wrong", err.message);
    }
  })
  .catch((err) => {
    console.log("Error in conn", err.message);
  });
