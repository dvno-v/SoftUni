let Station = (function () {
    let id = -1;

    class Station {
        constructor(temp, humidity, pressure, windSpeed) {
            this.id = ++id;
            this.temperature = temp;
            this.humidity = humidity;
            this.pressure = pressure;
            this.windSpeed = windSpeed;
        }

        toString() {
            let weatherCondition = "Not stormy";
            if (this.temperature < 20 && (this.pressure < 700 || this.pressure > 900) && this.windSpeed > 25) {
                weatherCondition = "Stormy";
            }
            let result = `Reading ID: ${this.id}\n`+
                          `Temperature: ${this.temperature}*C\n`+
                          `Relative Humidity: ${this.humidity}%\n`+
                          `Pressure: ${this.pressure}hpa\n`+
                          `Wind Speed: ${this.windSpeed}m/s\n`+
                          `Weather: ${weatherCondition}`;
            return result;
        }
    }

    return Station;
})();


let st1 = new Station(32, 66, 760, 12);
console.log(st1.toString());
console.log("---")
let st2 = new Station(10, 40, 680, 30);
console.log(st2.toString());
let st3 = new Station(32, 66, 760, 12);
console.log(st3.toString());
