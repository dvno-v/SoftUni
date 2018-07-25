function solve(strArr) {
    let map = {};
    for (let i = 0; i < strArr.length; i += 2) {
        if (!map.hasOwnProperty(strArr[i])) {
            map[strArr[i]]= 0;
        }
        map[strArr[i]]+= Number(strArr[i+1]);
    }
    let result = JSON.stringify(map);
    console.log(result);
}

solve(["Sofia",
    20,
    "Varna",
    3,
    "Sofia",
    5,
    "Varna",
    4]);