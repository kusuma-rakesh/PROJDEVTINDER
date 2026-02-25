const isAuth = (req, res, next) => {
  console.log("Checking the Auth- from middlewares - auth.js");

  const token = "password";
  const isAuth = token === "password";
  if (!isAuth) {
    res.status(401).send("user is not an authorized admin");
  } else {
    next();
  }
};

module.exports = { isAuth };
