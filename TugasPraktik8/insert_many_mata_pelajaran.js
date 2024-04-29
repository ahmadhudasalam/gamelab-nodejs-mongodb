const { collection, client } = require("./db_config_sistem_informasi_akademik");

async function insertManyMataPelajaran() {
  try {
    await client.connect();
    const query = [
      { kode_mapel: "H02", nama_mapel: "HTML Dasar" },
      { kode_mapel: "H03", nama_mapel: "HTML Lanjut" },
      { kode_mapel: "J01", nama_mapel: "Javascript Dasar" },
      { kode_mapel: "J02", nama_mapel: "Javascript Lanjut" },
      { kode_mapel: "N01", nama_mapel: "NodeJS Dasar" },
      { kode_mapel: "N02", nama_mapel: "NodeJS Lanjut" },
      { kode_mapel: "P01", nama_mapel: "PHP Dasar" },
      { kode_mapel: "P02", nama_mapel: "PHP Lanjut" },
      { kode_mapel: "M01", nama_mapel: "MongoDB Dasar" },
      { kode_mapel: "M02", nama_mapel: "MongoDB lanjut" },
      { kode_mapel: "M03", nama_mapel: "MySQL Dasar" },
      { kode_mapel: "M04", nama_mapel: "MySQL lanjut" },
      { kode_mapel: "L01", nama_mapel: "Laravel Dasar" },
      { kode_mapel: "L01", nama_mapel: "Laravel Lanjut" },
    ];
    const options = { ordered: true };

    const result = await collection.insertMany(query, options);
    console.log(
      `Jumlah data yang berhasil ditambahkan adalah: ${result.insertedCount}`
    );
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}
insertManyMataPelajaran();
