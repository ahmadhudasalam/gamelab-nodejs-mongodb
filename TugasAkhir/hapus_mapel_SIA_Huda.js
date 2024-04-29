const { client, database } = require("./db_config");

async function deleteOneMapel() {
  try {
    await client.connect();
    const collection = database.collection("Mapel");
    const query = { kode_mapel: "SB" };
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 1) {
      console.log("1 data berhasil dihapus");
    } else {
      console.log("Data tidak ditemukan");
    }
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}
deleteOneMapel();
