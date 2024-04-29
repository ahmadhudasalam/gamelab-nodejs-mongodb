const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function getDatabuku() {
  try {
    await client.connect();
    const database = client.db("perpustakaan");
    const collection = database.collection("databuku");
    const databuku = await collection.find().toArray();
    console.log(databuku);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}
getDatabuku();

// function getDatabuku() {
//   return new Promise((resolve, reject) => {
//     client
//       .connect()
//       .then(() => {
//         const database = client.db("perpustakaan");
//         const collection = database.collection("databuku");
//         return collection.find().toArray();
//       })
//       .then((results) => {
//         console.log(results);
//         resolve();
//       })
//       .catch((error) => {
//         reject(error);
//       })
//       .finally(() => {
//         client.close();
//       });
//   });
// }
// getDatabuku();

// client.connect().then(() => {
//   client
//     .db("perpustakaan")
//     .collection("databuku")
//     .find()
//     .toArray()
//     .then((results) => {
//       console.log(results);
//     })
//     .catch((error) => {
//       console.error(error);
//     })
//     .finally(() => {
//       client.close();
//     });
// });

// client
//   .connect()
//   .then(() => {
//     const database = client.db("perpustakaan");
//     const collection = database.collection("databuku");
//     return collection.find().toArray();
//   })
//   .then((results) => {
//     console.log(results);
//     client.close();
//   })
//   .catch(console.error);
