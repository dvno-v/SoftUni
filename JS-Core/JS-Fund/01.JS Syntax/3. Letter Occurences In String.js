function letterOccurence(word, letter) {
    let count = 0;
    for(let a = 0; a<word.length ; a++){
        if(letter == word[a]) count++;
    }
    console.log(count);
}
letterOccurence(`asda`, `a`);