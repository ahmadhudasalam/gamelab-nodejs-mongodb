const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
const database = client.db("Sistem_Informasi_Akademik_Huda");

module.exports = { client, database };
