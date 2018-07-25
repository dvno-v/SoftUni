function a(arr) {
    "use strict";
    let allWords = [];
    for (let str of arr) {
        let word = []
        let tokens = str.split("32656 19759 32763").filter(a=>a.length>0);
        let code = tokens[tokens.length-1];
        let codeTokens = code.split(/\s+/g);
        let lenght = codeTokens.splice(0,4).filter(a=>a.length>0)[1];
        for(let i = 0; i<lenght;i++){
            word.push(codeTokens[i]);
        }
        let strWord = ""
        for (let charCode of word) {
            strWord+= String.fromCharCode(charCode)

        }
        allWords.push(strWord);
        //console.log(strWord)
        //console.log(lenght)
        //console.log(codeTokens)
        //console.log(word)
    }
    console.log(allWords.join("\n"))
}

a([ '32656 19759 32763 0 5 0 80 101 115 104 111 0 0 0 0 0 0 0 0 0 0 0',
    '0 32656 19759 32763 0 7 0 83 111 102 116 117 110 105 0 0 0 0 0 0 ' ])