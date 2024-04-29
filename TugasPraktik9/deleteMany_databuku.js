const { client, collection } = require("./db_config_perpustakaan");

async function deleteManyMataPelajaran() {
  try {
    await client.connect();
    const query = { pengarang: "Educa Studio" };
    const result = await collection.deleteMany(query);

    console.log(`${result.deletedCount} data yang berhasil dihapus`);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}
deleteManyMataPelajaran();
