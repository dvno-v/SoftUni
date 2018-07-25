function solve(text,endingStr) {
    let endStrLenght = endingStr.length;
    let endOfText = text.slice(-endStrLenght);
    return endingStr === endOfText ? "true" : "false";
}


console.log(solve("gosho", "osho"));