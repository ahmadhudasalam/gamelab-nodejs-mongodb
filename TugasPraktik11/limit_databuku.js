const { client, collection } = require("./db_config_perpustakaan");

async function limitDatabuku() {
  try {
    await client.connect();
    const result = await collection.find().limit(3).toArray();
    console.log(result);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}
limitDatabuku();
