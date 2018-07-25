function solve(strArr) {
    let map = new Map();
    for(let townPopCombo of strArr) {
        let strTokens = townPopCombo.split(" <-> ")
        let town = strTokens[0];
        let pop = Number(strTokens[1]);
        if(!map.has(town)){
            map.set(town, 0);
        }map.set(town, map.get(town) + pop);
    }
    for(let [town, pop] of map){
        console.log(`${town} : ${pop}`);
    }
}

solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000',
])