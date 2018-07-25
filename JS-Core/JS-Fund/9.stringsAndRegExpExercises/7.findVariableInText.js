function solve(text) {
    let variables=[];
    let pattern = /^_{1}([A-Za-z0-9]+)$/gm;
    let words = text.split(/\s+/g);
    for (let word of words) {
        let match = pattern.exec(word);
        if(match!==null){
            let variable = match[1];
            variables.push(variable);
        }
    }
    return variables.join(",")
}


console.log(solve("The _id and _age variables are both integers"));
solve("The _id and _age variables are both integers");
solve("The _id and _age variables are both integers");