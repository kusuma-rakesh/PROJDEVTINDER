const express = require("express");
const app = express();
const { isAuthorize } = require("./middlewares/auth.js");

app.use("/admin", isAuthorize);

app.get("/admin/getAllUsers", (req, res, next) => {
  res.send("getAllUsers");
});
app.get("/admin/deleteAUser", (req, res, next) => {
  res.send("deleteAUser");
});

app.listen(7774, () => {
  console.log("application running on port 7774");
});
