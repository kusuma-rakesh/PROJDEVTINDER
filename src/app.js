const express = require("express");
const app = express();

//Middlewares
const { isAuth } = require("./middlewares/auth.js");

app.use("/admin", isAuth);

app.get("/admin/getAllUsers", (req, res) => {
  console.log("In /admin/getAllUsers");
  res.send("/admin/getAllUsers");
});
app.get("/user/profile", (req, res) => {
  console.log("/user/profile");
  res.send("/user/profile");
});
app.get("/admin/deleteuser", (req, res) => {
  console.log("/admin/deleteuser");
  res.send("admin delete user");
});
app.listen(7773, () => {
  console.log("application started on port=7773");
});
