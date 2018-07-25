function a(strArr) {
    let carsBrands = new Map();
    for (let str of strArr) {
        let tokens = str.split(' | ');
        let brand = tokens[0];
        let model = tokens[1];
        let sales = Number(tokens[2]);
        if(!carsBrands.has(brand)){
            carsBrands.set(brand, new Map())
        }
        if(!carsBrands.get(brand).has(model)){
            carsBrands.get(brand).set(model, 0);
        }
        carsBrands.get(brand).set(model, carsBrands.get(brand).get(model) + sales);
    }
    for (let [carBrand, modelAndSales]of carsBrands) {
        console.log(carBrand);
        for (let [model, sales] of modelAndSales) {
            console.log(`###${model} -> ${sales}`)
        }
    }
}
a([
    'Audi | Q7 | 1000',
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
])