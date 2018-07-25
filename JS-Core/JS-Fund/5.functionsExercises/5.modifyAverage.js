function modifyAverage(num) {
    function getAverage(num) {
        let numberCounter = 0;
        let sum = 0;
        let numString = num + '';
        for (let i = 0; i < numString.length; i++) {
            sum += Number(numString[i]);
            numberCounter++;
        }
        return sum / numberCounter;
    }

    function modifyNumber(num) {
        return num + '9';
    }

    while (getAverage(num) <= 5) {
        num = Number(modifyNumber(num));
    }
    console.log(num)
}

modifyAverage(5835);