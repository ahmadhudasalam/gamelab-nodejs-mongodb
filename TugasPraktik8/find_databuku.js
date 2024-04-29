const { collection, client } = require("./db_config_perpustakaan");

async function findDataBuku() {
  try {
    await client.connect();
    const result = await collection.find().toArray();
    console.log(result);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}
findDataBuku();
