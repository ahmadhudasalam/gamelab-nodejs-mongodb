const { client, database } = require("./db_config");

async function joinCollection() {
  try {
    await client.connect();
    const collection = database.collection("Siswa");
    const kelas = [
      {
        $lookup: {
          from: "Kelas",
          localField: "kode_kelas",
          foreignField: "kode_kelas",
          as: "kelas",
        },
      },
      {
        $project: {
          "kelas._id": 0,
          "kelas.kode_kelas": 0,
        },
      },
    ];

    const result = await collection.aggregate(kelas).toArray();
    console.log(JSON.stringify(result, null, 2));
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}

joinCollection();
