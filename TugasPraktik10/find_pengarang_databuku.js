const { collection, client } = require("./db_config_perpustakaan");

async function findDataBuku() {
  try {
    await client.connect();
    const query = { pengarang: "Gamelab Indonesia" };
    const result = await collection.find(query).toArray();
    console.log(result);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}
findDataBuku();
