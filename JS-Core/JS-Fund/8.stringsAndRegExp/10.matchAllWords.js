function solve(text) {
    let result =  text.match(/\w+/g);
    return result.join("|")
}


console.log(solve("asdasd asdasdad"));