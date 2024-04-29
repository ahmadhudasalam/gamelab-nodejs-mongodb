const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);
const database = client.db("perpustakaan");
const collection = database.collection("databuku");

module.exports = { collection, client, database };
