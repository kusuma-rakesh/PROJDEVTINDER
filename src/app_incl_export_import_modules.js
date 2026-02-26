const express = require("express");
const app = express();

//Middlewares
const { isAuth } = require("./middlewares/auth.js");

app.use("/admin", isAuth);

app.get("/admin/getAllUsers", (req, res) => {
  console.log("In /admin/getAllUsers - query:", req.query);
  console.log("In /admin/getAllUsers - params:", req.params);
  console.log("In /admin/getAllUsers - url:", req.url);
  console.log("In /admin/getAllUsers - body:", req.body);
  console.log("In /admin/getAllUsers - method:", req.method);
  console.log("In /admin/getAllUsers - headers:", req.headers);
  res.send("/admin/getAllUsers");
});
app.get("/user/:id/:name/:work", (req, res) => {
  const uID = parseInt(req.params.id);
  console.log("/user/profile", uID);
  res.send("/user/profile");
});
app.get("/admin/deleteuser", (req, res) => {
  console.log("/admin/deleteuser:", req.url);
  res.send("admin delete user");
});

app.listen(7773, () => {
  console.log("application started on port=7773");
});
