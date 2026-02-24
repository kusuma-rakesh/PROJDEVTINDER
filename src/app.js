const express = require("express");
const app = express();

// app.use("/admin", (req, res) => {
//   console.log("Printing Admin Filters");
//   res.send("Admin Filters Page");
// });

// app.use("/", (req, res) => {
//   res.send("Hello Rakesh Kusuma");
// });

// app.get("/admin/1", (req, res) => {
//   res.send("i am in admin sub folder");
// });

// app.get("/abc/:id", (req, res) => {
//   console.log("print params", req.params);
//   res.send("Advanced routing with REGEX");
// });
//app.use returns if there is a match., it can be usd for GET/POST/DELETE//etc?

//using REGEX
// app.get(/r/, (req, res) => {
//   console.log("Using Regex");
//   res.send("Using Regex");
// });

app.get(/.*sh$/, (req, res) => {
  res.send("regex sentence end with the sh particular word");
});

app.get("/user", (req, res) => {
  console.log("req params", req.query);
  res.send("req - query");
});

app.get("/secure", (req, res) => {
  console.log("security details", req.query);
  res.send("res- secutiry");
});

app.get("/products", (req, res) => {
  console.log("Product Details: ", req.query);
  res.send("prod details");
});
app.post("/products", (req, res) => {
  res.send("Post Method Called Successfully...!!!");
});

app.delete("/products", (req, res) => {
  res.send("Delete method called successfullt...!");
});

//Dynamic Routing
app.get("/emp/:id/:name/:prod", (req, res) => {
  console.log("emp details", req.params);
  res.send("emp details with dynamic routing");
});
app.listen(7777, () => {
  console.log("app server started on port 7777");
});
