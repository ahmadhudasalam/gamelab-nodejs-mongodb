const { client, collection } = require("./db_config_perpustakaan");

async function joinCollection() {
  try {
    await client.connect();
    const lokasibuku = [
      {
        $lookup: {
          from: "lokasibuku",
          localField: "kode_buku",
          foreignField: "kode_buku",
          as: "data",
        },
      },
    ];

    const result = await collection.aggregate(lokasibuku).toArray();
    console.log(JSON.stringify(result, null, 2));
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}
joinCollection();
