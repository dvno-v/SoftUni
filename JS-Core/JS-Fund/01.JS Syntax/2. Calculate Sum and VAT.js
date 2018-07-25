function calcSumAndVat(arr) {
    let sum = 0;
    for(let num of arr)
    {
        sum+=num;
    }
    console.log(sum);
    console.log(sum/5);
    console.log(sum + sum/5);
}

calcSumAndVat([1,2,3]);