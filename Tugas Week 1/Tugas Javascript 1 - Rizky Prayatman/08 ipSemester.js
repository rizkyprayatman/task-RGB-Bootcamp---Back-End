function ipSemester() {
  var kontrakMK = [
    {
      matakuliah: "Matematika Dasar",
      sks: 3,
      indexNilai: "A",
      poin: 4,
    },
    {
      matakuliah: "Fisika 1",
      sks: 3,
      indexNilai: "B",
      poin: 3,
    },
    {
      matakuliah: "Fisika 2",
      sks: 3,
      indexNilai: "A",
      poin: 4,
    },
  ];

  let jumsksXpoin = 0;
  let totalSks = 0;
  let ip = 0;

  for (let index = 0; index < kontrakMK.length; index++) {
    jumsksXpoin += kontrakMK[index].poin * kontrakMK[index].sks;
    totalSks += kontrakMK[index].sks;
  }
  ip = jumsksXpoin / totalSks;
  console.log(ip);
}

ipSemester();
