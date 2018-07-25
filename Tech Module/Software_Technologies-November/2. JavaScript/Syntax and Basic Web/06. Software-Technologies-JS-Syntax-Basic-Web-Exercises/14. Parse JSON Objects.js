function parseJSONObjects(input) {
    for (line of input) {
        let obj = JSON.parse(line);
        console.log(`Name: ${obj.name}`);
        console.log(`Age: ${obj.age}`);
        console.log(`Date: ${obj.date}`);
    }
}

// Test:
parseJSONObjects([
    "{\"name\":\"Gosho\",\"age\":10,\"date\":\"19/06/2005\"}",
    "{\"name\":\"Tosho\",\"age\":11,\"date\":\"04/04/2005\"}"
]);