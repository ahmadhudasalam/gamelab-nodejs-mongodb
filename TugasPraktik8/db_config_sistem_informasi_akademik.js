const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);
const database = client.db("Sistem_Informasi_Akademik");
const collection = database.collection("Mata_Pelajaran");

module.exports = { collection, client };
