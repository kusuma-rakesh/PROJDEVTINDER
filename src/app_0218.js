const express = require("express");
const app = express();

// app.use("/", (req, res) => {
//   res.send("I am in dashboard page");
// });

app.use("/user", (req, res) => {
  res.send("I am in user profile page");
});
app.use("/settings", (req, res) => {
  res.send("I am in settings page");
});

// app.use("/", (req, res) => {
//   res.send("I am in dashboard page");
// });

app.listen(3700, () => {
  console.log("application is running at port > 3700");
});
