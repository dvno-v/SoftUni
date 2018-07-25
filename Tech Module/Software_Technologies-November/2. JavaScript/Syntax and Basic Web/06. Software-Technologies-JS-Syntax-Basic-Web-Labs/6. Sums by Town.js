function calculateSums(arr) {
    let objects = arr.map(JSON.parse);
    let townsArray = [];
    for (let object of objects) {
        if (object.town in townsArray) {
            townsArray[object.town] += object.income;
        }
        else {
            townsArray[object.town] = object.income;
        }
    }
    let sortedTowns = Object.keys(townsArray).sort();
    for (let town of sortedTowns) {
        console.log(`${town} -> ${townsArray[town]}`)
    }
}
