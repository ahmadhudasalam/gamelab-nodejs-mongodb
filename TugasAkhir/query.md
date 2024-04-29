### Use Database Sistem_Informasi_Akademik_Huda

```sh
use Sistem_Informasi_Akademik_Huda;
```

### Create Collection Kelas & Insert Documents

```sh
db.createCollection("Kelas");

db.Kelas.insertMany([{
  "_id": {
    "$oid": "6629c28927adc0428f5dde53"
  },
  "kode_kelas": "TKJ1",
  "nama_kelas": "10.TKJ"
},
{
  "_id": {
    "$oid": "6629c28927adc0428f5dde54"
  },
  "kode_kelas": "TKJ2",
  "nama_kelas": "11.TKJ"
},
{
  "_id": {
    "$oid": "6629c28927adc0428f5dde55"
  },
  "kode_kelas": "TKJ3",
  "nama_kelas": "12.TKJ"
},
{
  "_id": {
    "$oid": "6629c28927adc0428f5dde56"
  },
  "kode_kelas": "RPL1",
  "nama_kelas": "10.RPL"
},
{
  "_id": {
    "$oid": "6629c28927adc0428f5dde57"
  },
  "kode_kelas": "RPL2",
  "nama_kelas": "11.RPL"
},
{
  "_id": {
    "$oid": "6629c28927adc0428f5dde58"
  },
  "kode_kelas": "RPL3",
  "nama_kelas": "12.RPL"
},
{
  "_id": {
    "$oid": "6629c28927adc0428f5dde59"
  },
  "kode_kelas": "MM1",
  "nama_kelas": "10.MM"
},
{
  "_id": {
    "$oid": "6629c28927adc0428f5dde5a"
  },
  "kode_kelas": "MM2",
  "nama_kelas": "11.MM"
},
{
  "_id": {
    "$oid": "6629c28927adc0428f5dde5b"
  },
  "kode_kelas": "MM3",
  "nama_kelas": "12.MM"
},
{
  "_id": {
    "$oid": "6629c28927adc0428f5dde5c"
  },
  "kode_kelas": "DKV1",
  "nama_kelas": "10.DKV"
},
{
  "_id": {
    "$oid": "6629c28927adc0428f5dde5d"
  },
  "kode_kelas": "DKV2",
  "nama_kelas": "11.DKV"
},
{
  "_id": {
    "$oid": "6629c28927adc0428f5dde5e"
  },
  "kode_kelas": "DKV3",
  "nama_kelas": "12.DKV"
}]);
```

### Create Collection Mapel & Insert Documents

```sh
db.createCollection("Mapel");

db.Mapel.insertMany([{
  "_id": {
    "$oid": "6629c24c27adc0428f5dde45"
  },
  "kode_mapel": "AP",
  "nama_mapel": "Algoritma Pemrograman"
},
{
  "_id": {
    "$oid": "6629c24c27adc0428f5dde46"
  },
  "kode_mapel": "JK",
  "nama_mapel": "Jaringan Komputer"
},
{
  "_id": {
    "$oid": "6629c24c27adc0428f5dde47"
  },
  "kode_mapel": "PW",
  "nama_mapel": "Pemrograman Dasar Web"
},
{
  "_id": {
    "$oid": "6629c24c27adc0428f5dde48"
  },
  "kode_mapel": "DG",
  "nama_mapel": "Desain Grafis"
},
{
  "_id": {
    "$oid": "6629c24c27adc0428f5dde49"
  },
  "kode_mapel": "MM",
  "nama_mapel": "Multimedia"
},
{
  "_id": {
    "$oid": "6629c24c27adc0428f5dde4a"
  },
  "kode_mapel": "MTK",
  "nama_mapel": "Matematika"
},
{
  "_id": {
    "$oid": "6629c24c27adc0428f5dde4b"
  },
  "kode_mapel": "BING",
  "nama_mapel": "Bahasa Inggris"
},
{
  "_id": {
    "$oid": "6629c24c27adc0428f5dde4c"
  },
  "kode_mapel": "BI",
  "nama_mapel": "Bahasa Indonesia"
},
{
  "_id": {
    "$oid": "6629c24c27adc0428f5dde4d"
  },
  "kode_mapel": "SJR",
  "nama_mapel": "SEJARAH"
},
{
  "_id": {
    "$oid": "6629c24c27adc0428f5dde4e"
  },
  "kode_mapel": "SB",
  "nama_mapel": "SENI BUDAYA"
},
{
  "_id": {
    "$oid": "6629c24c27adc0428f5dde4f"
  },
  "kode_mapel": "PJOK",
  "nama_mapel": "PENJASORKES"
},
{
  "_id": {
    "$oid": "6629c24c27adc0428f5dde50"
  },
  "kode_mapel": "SO",
  "nama_mapel": "Sistem Operasi"
}]);
```

### Create Collection Siswa & Insert Documents

```sh
db.createCollections("Siswa");

db.Siswa.insertMany([{
  "_id": {
    "$oid": "6629c1ea27adc0428f5dde37"
  },
  "kode_kelas": "TKJ1",
  "kode_mapel": "AP",
  "nis": 1001,
  "nama_siswa": "Andi",
  "jk": "L",
  "alamat": "Salatiga"
},
{
  "_id": {
    "$oid": "6629c1ea27adc0428f5dde38"
  },
  "kode_kelas": "TKJ1",
  "kode_mapel": "JK",
  "nis": 1002,
  "nama_siswa": "Budi",
  "jk": "L",
  "alamat": "Salatiga"
},
{
  "_id": {
    "$oid": "6629c1ea27adc0428f5dde39"
  },
  "kode_kelas": "TKJ1",
  "kode_mapel": "PW",
  "nis": 1001,
  "nama_siswa": "Charly",
  "jk": "L",
  "alamat": "Salatiga"
},
{
  "_id": {
    "$oid": "6629c1ea27adc0428f5dde3a"
  },
  "kode_kelas": "RPL1",
  "kode_mapel": "MTK",
  "nis": 1001,
  "nama_siswa": "Dian",
  "jk": "P",
  "alamat": "Salatiga"
},
{
  "_id": {
    "$oid": "6629c1ea27adc0428f5dde3b"
  },
  "kode_kelas": "RPL1",
  "kode_mapel": "PW",
  "nis": 1001,
  "nama_siswa": "Shinta",
  "jk": "P",
  "alamat": "Salatiga"
}]);
```

### Create Collection Nilai & Insert Documents

```sh
db.createCollections("Nilai");

db.Nilai.insertMany([{
  "_id": {
    "$oid": "6629c21927adc0428f5dde3e"
  },
  "kode_mapel": "PW",
  "absensi": 85,
  "nilai_tugas": 82,
  "nilai_uts": "94",
  "nilai_uas": "95"
},
{
  "_id": {
    "$oid": "6629c21927adc0428f5dde3f"
  },
  "kode_mapel": "AP",
  "absensi": 90,
  "nilai_tugas": 86,
  "nilai_uts": "92",
  "nilai_uas": "96"
},
{
  "_id": {
    "$oid": "6629c21927adc0428f5dde40"
  },
  "kode_mapel": "JK",
  "absensi": 95,
  "nilai_tugas": 85,
  "nilai_uts": "92",
  "nilai_uas": "96"
},
{
  "_id": {
    "$oid": "6629c21927adc0428f5dde41"
  },
  "kode_mapel": "MTK",
  "absensi": 90,
  "nilai_tugas": 85,
  "nilai_uts": "91",
  "nilai_uas": "97"
},
{
  "_id": {
    "$oid": "6629c21927adc0428f5dde42"
  },
  "kode_mapel": "BING",
  "absensi": 90,
  "nilai_tugas": 83,
  "nilai_uts": "92",
  "nilai_uas": "95"
}]);
```
