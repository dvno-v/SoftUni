function solve(strArr) {
    let text ="";
    for(let i = 0; i<strArr.length;i++){
        text+= strArr[i]+"\n";
    }
    let namePattern = /\*([A-Z][a-zA-Z]*)(?= |\t|$)/gm;
    let phoneNumberPattern = /(\+[0-9-]{10})(?= |\t|$)/gm;
    let idPattern = /\![a-zA-Z0-9]+(?= |\t|$)/gm;
    let basesPattern = /\_[a-zA-Z0-9]+(?= |\t|$)/gm;
    let result = text.replace(namePattern, m => "|".repeat(m.length)).replace(phoneNumberPattern, m => "|".repeat(m.length)).replace(idPattern, m => "|".repeat(m.length)).replace(basesPattern, m => "|".repeat(m.length));
    console.log(result)
}

solve(['Agent *Ivankov was in the room when it all happened.',
    'The person in the room was heavily armed.',
    'Agent *Ivankov had to act quick in order.',
    'He picked up his phone and called some unknown number. ',
    'I think it was +555-49-796...',
    'I can\'t really remember...',
    'He said something about "finishing work with subject !2491a23BVB34Q and returning to Base _Aurora21".',
    'Then after that he disappeared from my sight.',
    'As if he vanished in the shadows.',
    'A moment, shorter than a second, later, I saw the person flying off the top floor.',
    'I really don\'t know what happened there.',
    'This is all I saw, that night.',
    'I cannot explain it myself...'])