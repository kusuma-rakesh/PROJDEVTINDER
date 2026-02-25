const express = require("express");
const app = express();

app.get("/profile/:Name/:id/:prod", (req, res) => {
  console.log("I am in profile page", req.params);
  res.send("I am in profile page to check candidate details..!!");
});

app.get("/profile", (req, res) => {
  console.log("I am in profile page", req.query);
  res.send("I am in profile page to check candidate details..!!");
});

//below is the default route
app.use("/", (req, res) => {
  res.send("default page");
});

app.listen(7771, () => {
  console.log("application runnning on port 7771");
});
