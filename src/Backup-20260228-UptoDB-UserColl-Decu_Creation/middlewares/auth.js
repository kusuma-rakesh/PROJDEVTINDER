// const isAuth = (req, res, next) => {
//   console.log("Checking the Auth- from middlewares - auth.js");

//   const token = "password";
//   const isAuth = token === "password";
//   if (!isAuth) {
//     res.status(401).send("user is not an authorized admin");
//   } else {
//     next();
//   }
// };

// module.exports = { isAuth };
const isAuthorize = (req, res, next) => {
  console.log("In Auth--Feb");

  const token = "admin";
  const isAuth = token === "admin";
  if (!isAuth) {
    res.status(401).send("unauthorized login");
    // next();
  } else {
    // res.send("authorized");
    next();
  }
};

const isUserAuthorize = (req, res, next) => {
  console.log("In user Auth--Feb");

  const token = "adminUser";
  const isAuth = token === "adminUser";
  if (!isAuth) {
    res.status(401).send("unauthorized login");
    // next();
  } else {
    // res.send("authorized");
    next();
  }
};

module.exports = { isAuthorize, isUserAuthorize };
