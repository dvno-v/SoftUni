function solve(strArr) {
    let citiesMap = new Map();
    for(let element of strArr){
        let elementTokens = element.split(/\s+->\s+/gm).filter(a => a.length>0);
        let town = elementTokens[0];
        let product = elementTokens[1];
        let sales = elementTokens[2].split(/\s+:\s+/gm).filter(a => a.length>0).map(Number).reduce((a,b) => a*b);
        if(!citiesMap.has(town)){
            citiesMap.set(town, new Map());
        }
        if(!citiesMap.get(town).has(product)){
            citiesMap.get(town).set(product,0)
        }
        citiesMap.get(town).set(product,citiesMap.get(town).get(product) + sales)
    }
    for (let [town, productAndSales] of citiesMap) {
        console.log(`Town - ${town}`)
        for (let [product, sales] of productAndSales) {
            console.log(`$$$${product} : ${sales}`)
        }
    }
}

solve(['Sofia -> Laptops HP -> 200 : 2000',
'Sofia -> Raspberry -> 200000 : 1500',
'Sofia -> Audi Q7 -> 200 : 100000',
'Montana -> Portokals -> 200000 : 1',
'Montana -> Qgodas -> 20000 : 0.2',
'Montana -> Chereshas -> 1000 : 0.3'
]);