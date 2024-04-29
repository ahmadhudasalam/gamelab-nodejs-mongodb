const { client, database } = require("./db_config");

async function updateOneMapel() {
  try {
    await client.connect();
    const collection = database.collection("Mapel");
    const filter = { kode_mapel: "PW" };
    const options = { upsert: true };
    const updateDoc = { $set: { nama_mapel: "Pemrograman Web" } };

    await collection.updateOne(filter, updateDoc, options);
    console.log("1 data berhasil diupdate");
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}
updateOneMapel();
