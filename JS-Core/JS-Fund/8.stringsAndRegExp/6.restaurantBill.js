function solve(arr) {
    let [products, bill] = [arr.filter((e, i ) => i % 2 ===0).join(", "), arr.filter((e, i ) => i % 2 !==0).map(Number).reduce((a, b) => a+b)];
    console.log(`You purchased ${products} for a total sum of ${bill}`);
}


solve(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']);