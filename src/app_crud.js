const express = require("express");
const app = express();
const cors = require("cors");
const mongoClient = require("mongodb").MongoClient;
const connStr = "mongodb://localhost:27017/";

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => {
  res.send("CRUD Operations");
  res.end();
});

//retrieve client info using HTTP Get Method - Get ALL:
app.get("/getClients", (req, res) => {
  mongoClient.connect(connStr).then((clientObj) => {
    var db = clientObj.db("AICS");
    db.collection("clients_new")
      .find({})
      .toArray()
      .then((data) => {
        res.send(data);
        res.end();
      });
  });
});

//retrieve client info using HTTP Get Method - Get selected client:
app.get("/filterClients", (req, res) => {
  mongoClient.connect(connStr).then((clientObj) => {
    var db = clientObj.db("AICS");
    var clName = req.query.name;
    var clCountry = req.query.country;
    var clRating = req.query.rating;

    console.log(clName, clCountry);

    if (clName) {
      db.collection("clients_new")
        .findOne({ name: clName })
        //   .toArray()
        .then((data) => {
          res.send(data);
          res.end();
        });
    } else if (clCountry) {
      db.collection("clients_new")
        .find({ Country: clCountry })
        .toArray()
        .then((data) => {
          res.send(data);
          res.end();
        });
    } else if (clCountry) {
      db.collection("clients_new")
        .find({ rating: clRating })
        .toArray()
        .then((data) => {
          res.send(data);
          res.end();
        });
    }
  });
});

//HTTP - POST Method - To insert a new doc into the collection.
app.post("/addClients", (req, res) => {
  mongoClient.connect(connStr).then((clientObj) => {
    var db = clientObj.db("AICS");
    var newClient = {
      name: "SpiceJet Airlines",
      Country: "India",
      size: "Medium",
      "ELP Products": [],
      Performance: "Good",
      rating: 4.0,
    };
    db.collection("clients_new")
      .insertOne(newClient)
      .then((result) => {
        // res.send({ message: "Insert completed", id: result.insertedId });
        res.redirect("/getClients");
      });
  });
});

//HTTP Method Patch --> update the rating
app.patch("/updateClients", (req, res) => {
  mongoClient.connect(connStr).then((clientObj) => {
    var db = clientObj.db("AICS");
    const spieceJetRating = { rating: 4.8 };
    const clName = req.query.name;
    db.collection("clients_new")
      .updateOne({ name: clName }, { $set: spieceJetRating })
      .then((result) => {
        res.redirect("/getClients");
      });
  });
});

//HTTP Method Delete --> Delete a client
app.delete("/deleteClients", (req, res) => {
  mongoClient.connect(connStr).then((clientObj) => {
    var db = clientObj.db("AICS");
    const clName = req.query.name;
    db.collection("clients_new")
      .deleteOne({ name: clName })
      .then((result) => {
        res.redirect("/getClients");
      });
  });
});

app.listen(7775, () => {
  console.log("application running on port 7775");
});
