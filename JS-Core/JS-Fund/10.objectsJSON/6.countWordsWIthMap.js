function solve(strArr) {
    let map = new Map();
    let pattern = /[^A-Za-z0-9_]/gm;
    for (let string of strArr) {
        let words = string.split(pattern).filter(a=>a.length>0).map( w => w.toLowerCase());
        for (let word of words) {
            if(!map.has(word)){
                map.set(word,1)
            }else  map.set(word,map.get(word) +1);
        }

    }
    let sortedMapArr = map.keys();
    let sortedKeys = Array.from(sortedMapArr).sort();
    for (let key of sortedKeys) {
        console.log(`'${key}' -> ${map.get(key)} times`)
    }
}

solve(["Far too slow, you're far too slow.",
"JS devs use Node.js for server-side JS. JS devs use JS. -- JS for devs --"])