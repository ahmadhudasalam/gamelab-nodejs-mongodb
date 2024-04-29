const { client, collection } = require("./db_config_sistem_informasi_akademik");

async function insertOneMataPelajaran() {
  try {
    await client.connect();
    const query = {
      _id: 1,
      kode_mapel: "H001",
      nama_mapel: "HTML dan CSS",
    };
    await collection.insertOne(query);
    console.log("1 data berhasil ditambahkan!");
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}
insertOneMataPelajaran();
