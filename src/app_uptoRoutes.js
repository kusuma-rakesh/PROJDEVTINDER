const express = require("express");
const app = express();
const { isAuthorize, isUserAuthorize } = require("./middlewares/auth.js");

try {
  app.use("/admin", isAuthorize);

  app.get("/admin/getAllUsers", (req, res, next) => {
    res.send("getAllUsers");
  });
  app.get("/admin/deleteAUser", (req, res, next) => {
    res.send("deleteAUser");
  });

  app.get("/users/data", isUserAuthorize, (req, res) => {
    res.asend("User data page loaded"); //spell mistake in send
    // res.send("User data page loaded"); //spell mistake in send
  });
} catch (err) {
  res.status(500).send("Something went wrong please contact developer..");
}

//below code handles the errors  for all routings "/"
app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("Something Went Wrong..!!");
  }
});
app.listen(7774, () => {
  console.log("application running on port 7774");
});
