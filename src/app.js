const express = require("express");
const app = express();
const { conStr, con } = require("./Config/database.js");
const { User } = require("./models/user.js");
var validator = require("validator");
var { validateSignUpData } = require("./helpers/devTinderHelper.js");
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
          req.body.skills,
        );
        validateSignUpData(req.body);

        db.collection("User")
          .insertOne(newUser)
          .then(() => {
            console.log("done insertion");
            res.redirect("/feedUsers");
          });
        //res.send("data inserted successfully from Postman.");
      } catch (err) {
        console.error(err.message);
        res.status(400).send("Email is not valid.!");
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

    //Update - Patch
    try {
      app.patch("/updateUser/:firstName", (req, res) => {
        //const firstName = req.body.firstName;
        const firstName = req.params?.firstName; //
        console.log(firstName);

        const data = req.body;
        const ALLOWED_FIELD_UPDATES = ["lastName", "password", "age", "skills"];
        if (req.body.skills.length > 10) {
          res.status(400).send("Skills exceeding the expected size");
        }

        // Call: http://127.0.0.1:7777/updateUser/MS
        // RAW data Given in Postman => {
        // "lastName": "MSDhoni",
        // "password": "Dhoni@9799",
        // "gender": "male",
        // "age":47
        // }

        //Explaination:
        //object.key() - checks the field names(Not Values)
        //every() => in complete collection of MS
        //ALLOWED_FIELD_UPDATES.includes --> if the given fields are only included in the object, then it returns true.
        const isUpdateAllowed = Object.keys(data).every((k) =>
          ALLOWED_FIELD_UPDATES.includes(k),
        );
        console.log(isUpdateAllowed);

        if (!isUpdateAllowed) {
          res.send("Update Is Not Alloed For Given Object Definition");
        }
        db.collection("User")
          .findOneAndUpdate({ firstName }, { $set: data })
          //   .toArray()
          .then(() => {
            console.log(`${firstName}  - Data Updated successfully.`);
            res.redirect("/feedUsers");
          });
      });
    } catch (err) {
      //   console.error("Something Went Wrong", err.message);
      res.send("Something Not Worked");
    }
  })
  .catch((err) => {
    console.log("Error in conn", err.message);
  });
