db.databuku.insertOne({
  kode_buku: "LA001",
  judul_buku: "Logika dan Algoritma Pemrograman",
  pengarang: "Khawarizmi",
  jml_halaman: 700,
  thn_terbit: 2022,
});

db.databuku.insertMany([
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
]);

db.databuku.find().pretty();

{
  pengarang: {
    $eq: "Gamelab Indonesia";
  }
}
