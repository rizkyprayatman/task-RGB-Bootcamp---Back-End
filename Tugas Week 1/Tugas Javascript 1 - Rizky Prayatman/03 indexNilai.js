function indexNilai(nilai){ 
    if (nilai >= 80){
        index = "A";
    } else if (nilai >= 70){
        index = "B";
    } else if (nilai >= 60){
        index = "C";
    } else if (nilai >= 50){
        index = "D";
    } else {
        index = "E";
    }

    // if (nilai < 50){
    //     index = "E";
    // } else if (nilai <= 50){
    //     index = "D";
    // } else if (nilai <= 60){
    //     index = "C";
    // } else if (nilai <= 70){
    //     index = "B";
    // } else {
    //     index = "A";
    // }

    console.log("Nilai : " + nilai)
    console.log("Index Nilai : " + index)
}

indexNilai(80);