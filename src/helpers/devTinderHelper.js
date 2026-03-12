const validator = require("validator");
const validateSignUpData = (data) => {
  const { firstName, lastName, emailID, password } = data;
  if (!validator.isEmail(emailID)) {
    console.error("Email is invalid...");
    throw new error("Email is invalid...");
  } else if (!validator.isStrongPassword(password)) {
    console.error("Password is not strong");
    throw new error("Password is not strong");
  } else if (firstName.length < 5 || firstName.length > 50) {
    console.error("user name is incorrect length");
    throw new error("user name is incorrect length");
  }
};

module.exports = { validateSignUpData };
