function solve(textArr) {
    let wordscount = {};
    let regexp = /[^A-Za-z0-9_]/gm;
    for (let text of textArr) {
        let words = text.split(regexp).filter(a=> a.length>0);
        for (let word of words) {
            if(!wordscount.hasOwnProperty(word)){
                wordscount[word] = 0;
            }wordscount[word] += 1;
        }
    }
    console.log(JSON.stringify(wordscount))
}
solve(["JS devs use Node.js for server-side JS.-- JS for devs"])