const mongoClient = require("mongodb").MongoClient;
const connStr = "mongodb://localhost:27017/";
const connection = mongoClient.connect(connStr);
/*
connection
  .then((clientObj) => {
    console.log("connection established successfully..!");
    var db = clientObj.db("AICS");
  })
  .catch((err) => {
    console.error(err.message);
  })
  .finally(() => {
    console.log("In Finally");
  });
*/

module.exports = { connStr, connection };
