function solve(strArr) {
    let products = new Map();
    for (let i = 0; i < strArr.length; i++) {
        let tokens = strArr[i].split(/\s+\|\s+/g);
        let town = tokens[0]
        let product = tokens[1]
        let prices = Number(tokens[2]);
        if (!products.has(product)) {
            products.set(product, new Map());
        }
        if (!products.get(product).has(town)) {
            products.get(product).set(town, 0);
        }
        products.get(product).set(town, prices);
    }

    for (let [product, townPrices] of products) {
        let minPrice = Number.MAX_SAFE_INTEGER;
        let minPriceTown = "";
        for (let [town, prices] of townPrices) {
            if (prices < minPrice) {
                minPrice = prices;
                minPriceTown = town;
            }
        }
        console.log(`${product} -> ${minPrice} (${minPriceTown})`)
    }
}

solve([
    'Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000'
]);