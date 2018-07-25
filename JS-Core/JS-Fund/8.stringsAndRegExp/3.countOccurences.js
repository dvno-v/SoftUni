function solve(word, text) {
    let index = text.indexOf(word);
    let count = 0;
    while(index!==-1){
        count++;
        index = text.indexOf(word,index+1);
    }
    return count;
}

console.log(solve('haha', 'hahaha'));