function bmiCalculator(jenisKelamin, beratBadan, tinggiBadan){ 
    if (jenisKelamin === "pria"){
        BMI = beratBadan / (tinggiBadan*tinggiBadan);
        if (BMI < 17){
            console.log("Kurus")
            console.log(BMI)
        } else if (BMI >= 17 && BMI <= 23){
            console.log("Normal")
            console.log(BMI)
        } else if (BMI >= 24 && BMI <= 27){
            console.log("Gemuk")
            console.log(BMI)
        } else {
            console.log("Obesitas")
            console.log(BMI)
        }
    }

    if (jenisKelamin === "wanita"){
        BMI = beratBadan / (tinggiBadan*tinggiBadan);
        if (BMI < 18){
            console.log("Kurus")
            console.log(BMI)
        } else if (BMI >= 18 && BMI <= 25){
            console.log("Normal")
            console.log(BMI)
        } else if (BMI >= 26 && BMI <= 27){
            console.log("Gemuk")
            console.log(BMI)
        } else {
            console.log("Obesitas")
            console.log(BMI)
        }
    }
}

bmiCalculator("pria", 55, 1.65);
bmiCalculator("wanita", 74, 1.65);