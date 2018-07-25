function bmiIndex(name,age,weight,height) {
    let bmi = Number((weight/ ((height/100))**2)).toFixed(1);
    let getStatus = (bmi) => {
        if(bmi >= 30) return "obese";
        if(bmi >= 25) return "overweight";
        if(bmi >= 18.5) return "normal";
        else return "underweight";
    };
    let patient = {
        name:name,
        personalInfo: {
            age:age,
            weight:weight,
            height:height
        },
        BMI: Math.round(bmi),
        status: getStatus(bmi)
    };
    if(getStatus(bmi) === "obese"){
        patient.recommendation = 'admission required';
    }
    return patient;
}
console.log(bmiIndex("Peter", 29, 75, 182));
console.log(bmiIndex("Honey Boo Boo", 9, 57, 137));