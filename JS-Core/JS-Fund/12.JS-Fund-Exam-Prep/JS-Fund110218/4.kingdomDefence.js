function a(kingomsObjs, battleMatrix) {
    let kingdoms = {};
    for (let kingdomsInfo of kingomsObjs) {
        let kingdom = kingdomsInfo['kingdom'];
        let general = kingdomsInfo['general'];
        let army = kingdomsInfo['army'];
        if (!kingdoms.hasOwnProperty(kingdom)) {
            kingdoms[kingdom] = {};
        }
        if (!kingdoms[kingdom].hasOwnProperty(general)) {
            kingdoms[kingdom][general] = 0;
            kingdoms[kingdom][general]["wins"] = 0;
            kingdoms[kingdom][general]["losses"] = 0;
        }
        kingdoms[kingdom][general] += Number(army);
        kingdoms[kingdom]['allWins'] = 0;
        kingdoms[kingdom]['allLosses'] = 0;
    }
    for (let battles of battleMatrix) {
        let attackKingdom = battles[0];
        let attackGeneral = battles[1];
        let defenceGeneral = battles[3];
        let defenceKingdom = battles[2];
        if (attackKingdom === defenceKingdom) {
            continue;
        }
        if (!kingdoms.hasOwnProperty(attackKingdom) || !kingdoms.hasOwnProperty(defenceKingdom)) {
            continue;
        }
        if (!kingdoms[attackKingdom].hasOwnProperty(attackGeneral) || !kingdoms[defenceKingdom].hasOwnProperty(defenceGeneral)) {
            continue;
        }
        if (kingdoms[attackKingdom][attackGeneral] > kingdoms[defenceKingdom][defenceGeneral]) {
            kingdoms[attackKingdom][attackGeneral] += Math.floor(kingdoms[attackKingdom][attackGeneral] * 1 / 10);
            kingdoms[defenceKingdom][defenceGeneral] -= Math.floor(kingdoms[defenceKingdom][defenceGeneral] * 1 / 10);
            kingdoms[attackKingdom][attackGeneral]['wins']++;
            kingdoms[defenceKingdom][defenceGeneral]['losses']++;
            kingdoms[attackKingdom]['allWins']++;
            kingdoms[defenceKingdom]['allLosses']++;
        } else if (kingdoms[attackKingdom][attackGeneral] < kingdoms[defenceKingdom][defenceGeneral]) {
            kingdoms[attackKingdom][attackGeneral] -= Math.floor(kingdoms[attackKingdom][attackGeneral] * 1 / 10);
            kingdoms[defenceKingdom][defenceGeneral] += Math.floor(kingdoms[defenceKingdom][defenceGeneral] * 1 / 10);
            kingdoms[attackKingdom][attackGeneral]['losses']++;
            kingdoms[defenceKingdom][defenceGeneral]['wins']++;
            kingdoms[attackKingdom]['allLosses']++;
            kingdoms[defenceKingdom]['allWins']++;
        } else {
            continue;
        }
    }
    let sortedKingdoms = Object.keys(kingdoms).sort((k1, k2) => {
        "use strict";
        if (kingdoms[k1]['allWins'] === kingdoms[k2]['allWins'] && kingdoms[k1]['allLosses'] === kingdoms[k2]['allLosses']) {
            return k1.localeCompare(k2);
        }
        if (kingdoms[k1]['allWins'] === kingdoms[k2]['allWins']) {
            return kingdoms[k1]['allLosses'] - kingdoms[k2]['allLosses']
        }
        return kingdoms[k1]['allLosses'] - kingdoms[k1]['allLosses'];
    }).filter(a => a['allWins'] !== 0);
    for (let kingdom of sortedKingdoms) {
        console.log(`Winner: ${kingdom}`);
        let sortedGenerals = Object.keys(kingdoms[kingdom]).sort((g1, g2) => {
            "use strict";
            return kingdoms[kingdom][g1]['wins'] - kingdoms[kingdom][g2]['wins'];
        }).filter( a=> kingdoms[kingdom][a] !== "allWins" | kingdoms[kingdom][a] !== "allLosses" );
        for (let general of sortedGenerals) {
            if(kingdoms[kingdom][general] != 'wins')
            console.log(`/\\general: ${general}`)

        }
    }
}

a([ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
        { kingdom: "Stonegate", general: "Ulric", army: 4900 },
        { kingdom: "Stonegate", general: "Doran", army: 70000 },
        { kingdom: "YorkenShire", general: "Quinn", army: 0 },
        { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
        { kingdom: "Maiden Way", general: "Berinon", army: 100000 } ],
    [ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Stonegate", "Ulric", "Stonegate", "Doran"],
        ["Stonegate", "Doran", "Maiden Way", "Merek"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"],
        ["Maiden Way", "Berinon", "Stonegate", "Ulric"] ]
);

