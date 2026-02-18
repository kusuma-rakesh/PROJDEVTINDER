const express = require("express");
const app = express();

app.use("/home", (req, res) => {
  res.send("i am in home page");
});
app.use("/users", (req, res) => {
  res.send("i am in users page");
});

app.use("/careers", (req, res) => {
  res.send("i am in careers page");
});

app.listen(7777, () => {
  console.log("server is running in port 7777....");
});
