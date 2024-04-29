const { collection, client } = require("./db_config_sistem_informasi_akademik");
async function findMataPelajaran() {
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
findMataPelajaran();
