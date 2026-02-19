const express = require("express");
const app = express();
const user = {
  FullName: "Rakesh Kusuma",
  WorkingAt: "Elp Aviation",
  EmpCode: "ELP0046",
};

// NOTE: aapp.use is very danger here -> it always runs event if we try /user as it is matchin /
// So keep in mind the order., Avoid using app.use()
app.use("/", (req, res) => {
  res.send("HAHAHAHAHA");
});

app.get("/users", (req, res) => {
  res.send(user);
});
app.post("/users", (req, res) => {
  res.send("POST Method called successfully..!!");
});
app.delete("/users", (req, res) => {
  res.send("DELETE method called successfully..!!");
});
app.listen(3700, () => {
  console.log("applicaiton is running at port >> 3700");
});
