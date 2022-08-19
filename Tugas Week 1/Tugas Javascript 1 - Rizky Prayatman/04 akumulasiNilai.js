function akumulasiNilai(kehadiran, tugas, UTS, UAS){ 
    poinSatu = kehadiran * 10/100;
    poinDua = tugas * 20/100;
    poinTiga = UTS * 30/100;
    poinEmpat = UAS * 40/100;

    nilaiAkhir = poinSatu + poinDua + poinTiga + poinEmpat;
    console.log(nilaiAkhir);
}

akumulasiNilai(80, 70, 80, 85);