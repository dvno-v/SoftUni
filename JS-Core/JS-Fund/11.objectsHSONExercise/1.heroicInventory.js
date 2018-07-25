function a(strArr){
    let heroes = [];
    for (let str of strArr) {
        let hero = {};
        let strTokens = str.split(/\s+\/\s+/gm);
        hero["name"] = strTokens[0];
        hero["level"] = Number(strTokens[1]);
        if(strTokens.length>2)
            hero["items"] = strTokens[2].split(", ");
        else hero['items'] = [];
        heroes.push(hero);
    }
    return JSON.stringify(heroes);
}

console.log(a(["Jake / 1000 / Gauss, HolidayGrenade",
    "Hes / 1 / Desolator, Sentinel, Antara"
]));