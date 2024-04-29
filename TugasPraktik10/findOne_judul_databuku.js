const { collection, client } = require("./db_config_perpustakaan");

async function findDataBuku() {
  try {
    await client.connect();
    const query = { judul_buku: "NodeJS dan MongoDB" };
    const result = await collection.findOne(query);
    console.log(result);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}
findDataBuku();
