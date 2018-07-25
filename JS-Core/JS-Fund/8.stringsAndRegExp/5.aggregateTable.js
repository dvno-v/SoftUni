function solve(strArr) {
    let sumIncomes = 0;
    let cities = [];
    for(let i = 0; i <strArr.length; i++){
        let cityAndTax = strArr[i].split('|').filter(a => a.length>0).map(e => e.trim());
        let [city, tax] = [cityAndTax[0], Number(cityAndTax[1])];
        sumIncomes+=tax;
        cities.push(city);
    }

    console.log(cities.join(", ")); console.log(sumIncomes);
}

solve(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
)