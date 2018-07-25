function solve(strArr) {
    let json = []
    strArr.shift();
    for (let str of strArr) {
        let [town, lat, longt]= str.split("|").filter(a => a.length>0).map(e => e.trim());
        let obj = {
            Town: town,
            Latitude: Number(lat),
            Longitude: Number(longt)
        }
        json.push(obj)
    }
    return JSON.stringify(json);
}

console.log(solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']));;
