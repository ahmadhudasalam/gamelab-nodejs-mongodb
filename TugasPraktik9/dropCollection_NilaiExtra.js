const { client, database } = require("./db_config_sistem_informasi_akademik");

async function dropCollectionNilaiExtra() {
  try {
    await client.connect();
    const collection = database.collection("nilaiExtra");

    await collection.drop();
    console.log("Koleksi berhasil dihapus");
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}
dropCollectionNilaiExtra();
