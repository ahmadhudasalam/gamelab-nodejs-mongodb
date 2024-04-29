const { client, database } = require("./db_config_perpustakaan");

async function joinCollectionAll() {
  try {
    await client.connect();
    const histori = database.collection("histori");

    const joinAll = [
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
    ];
    const result = await histori.aggregate(joinAll).toArray();
    console.log(JSON.stringify(result, null, 2));
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
joinCollectionAll();
