const { client, collection } = require("./db_config_perpustakaan");

async function limitPengarangDatabuku() {
  try {
    await client.connect();
    const query = { pengarang: "Gamelab Indonesia", thn_terbit: 2024 };
    const result = await collection.find(query).limit(2).toArray();
    console.log(result);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}
limitPengarangDatabuku();
