function a(strArr) {
    let strResult =""
    let result = {};
    for (let str of strArr) {
        let tokens = str.split(" > ");
        let country = tokens[0];
        let town = tokens[1];
        if(town === town.toLowerCase()){
            town = town[0].toUpperCase() + town.slice(1).toLowerCase()
        }
        let price  = Number(tokens[2]);
        if(!result.hasOwnProperty(country)){
            result[country] = {}
        }
        if(!result[country].hasOwnProperty(town)){
            result[country][town] = price;
        }
        if(result[country][town] >price){
            result[country][town] = price;
        }
    }
    let sorted = Object.keys(result).sort((c1,c2)=> c1.localeCompare(c2));

    for (let country of sorted) {
        strResult+=`${country} -> `;
        //console.log(result);
        let sortedTowns = Object.keys(result[country]).sort((town1,town2) => {
            "use strict";
            return result[country][town1] - result[country][town2];
        });
        for (let town of sortedTowns) {
           // console.log(town)
            strResult +=`${town} -> ${result[country][town]} `;
        }
        strResult+="\n";
    }
    console.log(strResult)
}


a(["Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200" ]
);
a(
    [
        'Bulgaria > Sofia > 25000',
        'Bulgaria > Sofia > 25000',
        'Kalimdor > Orgrimar > 25000',
        'Albania > Tirana > 25000',
        'Bulgaria > Aarna > 25010',
        'Bulgaria > Lukovit > 10'
    ]
)