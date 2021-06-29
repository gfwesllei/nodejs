const { MongoClient } = require("mongodb");

const uri = "mongodb://root:root@localhost:27017";

const client = new MongoClient(uri);

module.exports = client
