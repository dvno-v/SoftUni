function solve(text) {
    "use strict";
    let words = text.split(" ");
    let result = [];
    for(let i = 0; i<words.length; i++){
        let currentWord = words[i];
        let currWrdLenght = currentWord.length;
        let modifiedWord = currentWord[0].toUpperCase() + currentWord.substr(1,currWrdLenght).toLowerCase();
        result.push(modifiedWord);
    }
    return result.join(" ");
}

console.log(solve("gOshO eE gEI"));