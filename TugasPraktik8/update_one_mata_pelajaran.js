const { collection, client } = require("./db_config_sistem_informasi_akademik");

async function updateOneMataPelajaran() {
  try {
    await client.connect();
    const filter = { nama_mapel: "Laravel Lanjut" };
    const options = { upsert: true };
    const updateDoc = { $set: { kode_mapel: "L02" } };

    await collection.updateOne(filter, updateDoc, options);
    console.log("1 data berhasil diupdate");
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}
updateOneMataPelajaran();
