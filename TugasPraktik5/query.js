use perpustakaan;

db.databuku.insertMany([
  {
    kode_buku: "DB001",
    judul_buku: "Bawang Merah dan Bawang Putih",
    pengarang: "Educa Studio",
    jml_halaman: 700,
    thn_terbit: 2022,
  },
  {
    kode_buku: "DB002",
    judul_buku: "Kelinci dan Kura-Kura",
    pengarang: "Educa Studio",
    jml_halaman: 700,
    thn_terbit: 2022,
  },
  {
    kode_buku: "DB003",
    judul_buku: "Kancil dan Buaya",
    pengarang: "Educa Studio",
    jml_halaman: 700,
    thn_terbit: 2022,
  },
  {
    kode_buku: "C003",
    judul_buku: "Pemrograman dasar C",
    pengarang: "Gamelab Indonesia",
    jml_halaman: 700,
    thn_terbit: 2022,
  },
  {
    kode_buku: "LA001",
    judul_buku: "Logika dan Algoritma Pemrograman",
    pengarang: "Gamelab Indonesia",
    jml_halaman: 700,
    thn_terbit: 2022,
  },
  {
    kode_buku: "HCJ01",
    judul_buku: "HTML, CSS dan Javascript",
    pengarang: "Gamelab Indonesia",
    jml_halaman: 700,
    thn_terbit: 2022,
  },
  {
    kode_buku: "NM001",
    judul_buku: "NodeJS dan MySQL",
    pengarang: "Gamelab Indonesia",
    jml_halaman: 700,
    thn_terbit: 2022,
  },
  {
    kode_buku: "NM002",
    judul_buku: "NodeJS dan MongoDB",
    pengarang: "Gamelab Indonesia",
    jml_halaman: 700,
    thn_terbit: 2022,
  },
  {
    kode_buku: "PO001",
    judul_buku: "Pemrograman Berorientasi Objek",
    pengarang: "Gamelab Indonesia",
    jml_halaman: 700,
    thn_terbit: 2022,
  },
]);

db.databuku.aggregate([
  { $group: { _id: "$pengarang", Total_Buku: { $sum: 1 } } },
]);


use Sistem_Informasi_Akademik;

db.Siswa.find();

db.Siswa.find().count();

db.Siswa.aggregate({$group: {_id : "$scores.type",Nilai_terendah: { $min: "$scores.score"}}});

db.Siswa.aggregate({$group: {_id : "$scores.type",Nilai_tertinggi: { $max: "$scores.score"}}});

db.nilaiExtra.aggregate([
  { $project: { rata_rata_kuis: { $avg: "$quizzes"}, rata_rata_tugas: { $avg: "$labs" }, rata_rata_ujian: { $avg: [ "$final", "$midterm" ] } } }
])