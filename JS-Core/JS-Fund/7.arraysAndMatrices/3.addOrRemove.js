function solve(commands) {
    let initialNum = 1;
    let result = []
    for(let command of commands){
        if(command.toLowerCase() === "add"){
            result.push(initialNum);
        }else if(command.toLowerCase() === "remove"){
            result.pop();
        }
        initialNum++;
    }
    if(result.length>0){
        console.log(result.join('\n'));
    }else {
        console.log("Empty");
    }
}

solve(["add","add","add","add"])
solve(["add","add",'remove',"add","add"])
solve(['remove','remove'])