const { client, collection } = require("./db_config_perpustakaan");

async function joinSortFilterCollection() {
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
      {
        $match: { "data.nama_rak": { $eq: "Database" } },
      },
      {
        $sort: { "data.kode_buku": 1 },
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
joinSortFilterCollection();
