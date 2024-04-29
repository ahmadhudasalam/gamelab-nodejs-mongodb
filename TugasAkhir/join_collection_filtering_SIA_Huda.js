const { client, database } = require("./db_config");

async function joinSortFilterCollection() {
  try {
    await client.connect();
    const collection = database.collection("Kelas");
    const siswa = [
      {
        $lookup: {
          from: "Siswa",
          localField: "kode_kelas",
          foreignField: "kode_kelas",
          as: "Nama_Siswa",
        },
      },
      {
        $project: {
          "Nama_Siswa._id": 0,
          "Nama_Siswa.kode_kelas": 0,
          "Nama_Siswa.kode_mapel": 0,
          "Nama_Siswa.alamat": 0,
          "Nama_Siswa.jk": 0,
        },
      },
    ];

    const result = await collection.aggregate(siswa).toArray();
    console.log(JSON.stringify(result, null, 2));
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}
joinSortFilterCollection();
