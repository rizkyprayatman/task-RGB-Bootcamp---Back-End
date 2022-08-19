function indexKelulusan(kehadiran, tugas, UTS, UAS){ 
    poinSatu = kehadiran * 10/100;
    poinDua = tugas * 20/100;
    poinTiga = UTS * 30/100;
    poinEmpat = UAS * 40/100;

    nilaiAkhir = poinSatu + poinDua + poinTiga + poinEmpat;

    if (nilaiAkhir >= 80 && kehadiran > 65){
        index = "A";
        status = "lulus";
    } else if (nilaiAkhir >= 70 && nilaiAkhir < 80 && kehadiran > 65){
        index = "B";
        status = "lulus";
    } else if (nilaiAkhir >= 60 && nilaiAkhir < 70 && kehadiran > 65){
        index = "C";
        status = "lulus";
    } else if (nilaiAkhir >= 50 && nilaiAkhir < 60 && kehadiran > 65){
        index = "D";
        status = "tidak lulus";
    } else if (nilaiAkhir < 50 || kehadiran <= 65){
        index = "E";
        status = "tidak lulus";
        nilaiAkhir = "T";
    }

    console.log("Nilai Akhir : " + nilaiAkhir + " Index Nilai : " + index + " status : " + status)
}

indexKelulusan(80, 70, 80, 85);