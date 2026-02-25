const express = require("express");
const app = express();

//A route with multiple route handlers
app.use(
  "/user",
  (req, res, next) => {
    console.log("In ONE");
    // res.send("Response-1");
    next();
  },
  (req, res, next) => {
    console.log("In TWO");
    // res.send("Response-2");
    next();
  },
  (req, res, next) => {
    console.log("In Three");
    next();
    // res.send("Response-3");
  },
  (req, res, next) => {
    console.log("In Four");
    // res.send("Response-4");
    next();
  },
);
app.listen(7772, () => {
  console.log("application is running on port 7772");
});
