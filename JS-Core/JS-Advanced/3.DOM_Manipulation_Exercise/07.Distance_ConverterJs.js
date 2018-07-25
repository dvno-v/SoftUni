function attachEventsListeners() {
    "use strict";
    let inputMetric = '';
    document.getElementById('inputUnits').addEventListener("change", (event) => {
        console.log(event.target.value)
        inputMetric = event.target.value;
    });
    let outputMetric = "";
    document.getElementById('outputUnits').addEventListener("change", (event) => {
        console.log(event.target.value)
        outputMetric = event.target.value;
    });
    let convertBtn = document.getElementById('convert');
    convertBtn.addEventListener("click", convert);
    let output = document.getElementById('outputDistance');

    function convert() {
        let number = Number(document.getElementById('inputDistance').value);
        switch (inputMetric) {
            //km m cm mm mi yrd ft in>
            case "mm":
                number = number / 1000;
                break;
            case "cm":
                number = number / 100;
                break;
            case "mi":
                number = number / 0.000621371192;
                break;
            case "in":
                number = number / 39.3700787;
                break;
            case "km":
                number = number / 0.001;
                break;
            case "ft":
                number = number / 3.2808399;
                break;
            case "yrd":
                number = number / 1.0936133;
                break;
        }
        switch (outputMetric) {
            //km m cm mm mi yrd ft in>
            case "mm":
                number = number * 1000;
                break;
            case "cm":
                number = number * 100;
                break;
            case "mi":
                number = number * 0.000621371192;
                break;
            case "in":
                number = number * 39.3700787;
                break;
            case "km":
                number = number * 0.001;
                break;
            case "ft":
                number = number * 3.2808399;
                break;
            case "yrd":
                number = number * 1.0936133;
                break;
        }
        //console.log(number)
        output.value = number;
    }
}