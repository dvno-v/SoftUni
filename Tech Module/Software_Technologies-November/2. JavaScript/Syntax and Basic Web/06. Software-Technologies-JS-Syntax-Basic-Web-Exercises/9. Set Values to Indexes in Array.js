function setValuesToIndexes(input) {
    let inputLength = Number(input[0]);
    let result = new Array(inputLength);
    for (let i = 0; i < inputLength; i++) {
        result[i] = 0;
    }
    for (let i = 1; i < input.length; i++) {
        let indexValue = input[i].split(' - ');
        let index = Number(indexValue[0]);
        let value = Number(indexValue[1]);
        result[index] = value;
    }
    console.log(result.join('\n'))
}

// Test:
setValuesToIndexes(["2", "0 - 5", "0 - 6", "0 - 7"]);
