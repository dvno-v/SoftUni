function solve(string, word) {
    let pattern = `\\b${word}\\b`;
    let re = new RegExp(pattern, 'gi')
    let matches = string.match(re);
    if(matches != undefined){
        return matches.length;
    }
    return 0;
}

console.log(solve("The goso was so gosoforo, that the child couldn’t see its peak.",
    "the"));