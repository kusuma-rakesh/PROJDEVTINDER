const express = require("express");
const app = express();

app.get("/user", (req, res, next) => {
  console.log("in First handler");
  //   res.send("in First handler");
  next();
});

app.get("/user", (req, res, next) => {
  console.log("in Second handler");
  //   res.send("in second handler");
  next();
});
app.listen(7772, () => {
  console.log("application running on port 7772");
});
