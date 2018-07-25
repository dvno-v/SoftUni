function turnObjectsIntoJSONString(input) {
    let obj = {};
    for (let i = 0; i < input.length; i++) {
        let pair = input[i].split(' -> ');
        if (pair[0] == "age" || pair[0] == "grade") {
            obj[pair[0]] = Number(pair[1]);
        }
        else {
            obj[pair[0]] = pair[1];
        }
    }
    let result = JSON.stringify(obj);
    console.log(result);
}

// Test:
turnObjectsIntoJSONString([
    "name -> Angel",
    "surname -> Georgiev",
    "age -> 20",
    "grade -> 6.00",
    "date -> 23/05/1995",
    "town -> Sofia"
]);