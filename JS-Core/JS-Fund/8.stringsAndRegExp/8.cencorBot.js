function solve(text, cencorship) {
    for (let i = 0; i < cencorship.length; i++) {
        let cencorWord= cencorship[i];
        let replacement = '-'.repeat(cencorWord.length);
        let foundReplacement = text.indexOf(cencorWord);
        while(foundReplacement !== -1){
            text = text.replace(cencorWord, replacement);
            foundReplacement = text.indexOf(cencorWord);
        }
    }
    console.log(text)
}




solve('roses are red, violets are blue', [', violets are', 'red'])