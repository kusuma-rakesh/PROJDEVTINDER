const mongoClient = require("mongodb").MongoClient;
const conStr = "mongodb://localhost:27017/";
const con = mongoClient.connect(conStr);

module.exports = { conStr, con };
