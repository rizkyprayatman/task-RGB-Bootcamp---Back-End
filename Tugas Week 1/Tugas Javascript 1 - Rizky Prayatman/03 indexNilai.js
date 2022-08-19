function indexNilai(nilai){ 
    if (nilai >= 80){
        index = "A";
        console.log(index)
    } else if (nilai >= 70 && nilai < 80){
        index = "B";
        console.log(index)
    } else if (nilai >= 60 && nilai < 70){
        index = "C";
        console.log(index)
    } else if (nilai >= 50 && nilai < 60){
        index = "D";
        console.log(index)
    } else {
        index = "E";
        console.log(index)
    }
}

indexNilai(80);