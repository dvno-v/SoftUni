function solve(text,startStr) {
    let startStrLenght = startStr.length;
    let textSubstring = text.substr(0,startStrLenght);
    return textSubstring === startStr ? "true" : "false";
}

console.log(solve("iskam gosho", "iskam"));

