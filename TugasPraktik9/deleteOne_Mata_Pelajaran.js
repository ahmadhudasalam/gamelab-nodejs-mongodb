const { client, collection } = require("./db_config_sistem_informasi_akademik");

async function deleteOneMataPelajaran() {
  try {
    await client.connect();
    const query = { _id: 1 };
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
deleteOneMataPelajaran();
