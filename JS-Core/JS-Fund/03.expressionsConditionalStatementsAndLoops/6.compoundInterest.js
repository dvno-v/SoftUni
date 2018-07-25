function interest(arr) {
    let p = Number(arr[0]);
    let i = Number(arr[1])/100;
    let n = 12 / Number(arr[2]);
    let t = Number(arr[3]);

    let compoundInt = p * Math.pow((1 + i/n),t*n);
    console.log(compoundInt.toFixed(2));
}

interest([1500, 4.3, 3, 6]);interest([100000, 5, 12, 25]);