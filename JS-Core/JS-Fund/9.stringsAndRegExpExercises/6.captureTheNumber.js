function solve(strArr) {
    let pattern = /\d+/g;
    let numbers =[];
    for(let string of strArr){
        let match;
        while(match = pattern.exec(string)){
            numbers.push(match);
        }
    }

    return numbers.join(" ")
}


console.log(solve(["The300", "What is that?", "I think it’s the 3rd movie.", "Lets watch it at 22:45"]));;