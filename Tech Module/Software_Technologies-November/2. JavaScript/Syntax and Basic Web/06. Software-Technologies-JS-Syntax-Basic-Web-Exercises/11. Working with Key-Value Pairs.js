function workingWithKeyValuePairs(input) {
    let dict = {};
    for (let i = 0; i < input.length - 1; i++) {
        let pair = input[i].split(' ');
        let key = pair[0];
        let value = pair[1];
        dict[key] = value;
    }
    let choosenKey = input[input.length - 1];
    if (choosenKey in dict) {
        console.log(dict[choosenKey]);
    }
    else {
        console.log('None');
    }
}

// Test:
workingWithKeyValuePairs([
    "3 bla",
    "3 alb",
    "2"]);