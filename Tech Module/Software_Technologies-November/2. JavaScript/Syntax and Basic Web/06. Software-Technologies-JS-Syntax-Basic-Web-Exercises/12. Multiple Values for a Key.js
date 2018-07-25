function multipleValuesForKey(input) {
    let dict = {};
    for (let i = 0; i < input.length - 1; i++) {
        let pair = input[i].split(' ');
        let key = pair[0];
        let value = pair[1];
        if (!(key in dict)) {
            dict[key] = [];
        }
        dict[key].push(value);
    }
    let choosenKey = input[input.length - 1];
    if (choosenKey in dict) {
        console.log(dict[choosenKey].join('\n'));
    }
    else {
        console.log('None');
    }
}

// Test:
multipleValuesForKey([
    "key value",
    "key eulav",
    "key"]);