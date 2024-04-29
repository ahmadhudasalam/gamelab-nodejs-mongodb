const { client, database } = require("./db_config_perpustakaan");

async function joinFilteringCollectionAll() {
  try {
    await client.connect();
    const histori = database.collection("histori");

    const joinAllFiltering = [
      {
        $lookup: {
          from: "databuku",
          localField: "kode_buku",
          foreignField: "kode_buku",
          as: "hasil_data_buku",
        },
      },
      {
        $lookup: {
          from: "lokasibuku",
          localField: "kode_buku",
          foreignField: "kode_buku",
          as: "hasil_data_lokasi",
        },
      },
      {
        $lookup: {
          from: "anggota",
          localField: "kode_anggota",
          foreignField: "kode_anggota",
          as: "hasil_data_anggota",
        },
      },
      {
        $match: { "hasil_data_anggota.alamat": { $eq: "Salatiga" } },
      },
      {
        $sort: { "hasil_data_anggota.kode_anggota": 1 },
      },
    ];
    const result = await histori.aggregate(joinAllFiltering).toArray();
    console.log(JSON.stringify(result, null, 2));
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
joinFilteringCollectionAll();
