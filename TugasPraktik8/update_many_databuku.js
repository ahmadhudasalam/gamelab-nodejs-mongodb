const { collection, client } = require("./db_config_perpustakaan");

async function updateManyDataBuku() {
  try {
    await client.connect();
    const filter = { pengarang: "Gamelab Indonesia" };
    const updateDoc = { $set: { thn_terbit: 2024 } };

    const result = await collection.updateMany(filter, updateDoc);
    console.log(`${result.modifiedCount} data berhasil diupdate`);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}
updateManyDataBuku();
