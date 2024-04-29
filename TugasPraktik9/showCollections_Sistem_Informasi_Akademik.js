const { client, database } = require("./db_config_sistem_informasi_akademik");

async function showCollectionsSistemInformasiAkademik() {
  try {
    await client.connect();
    const collections = await database.listCollections().toArray();

    collections.forEach((collection) => {
      console.log(collection.name);
    });
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}
showCollectionsSistemInformasiAkademik();
