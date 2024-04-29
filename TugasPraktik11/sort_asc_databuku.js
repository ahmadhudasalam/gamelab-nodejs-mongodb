const { client, collection } = require("./db_config_perpustakaan");

async function sortAscDatabuku() {
  try {
    await client.connect();
    const sort = { judul_buku: 1 };
    const result = await collection.find().sort(sort).toArray();
    console.log(result);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}
sortAscDatabuku();
