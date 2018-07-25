function solve(arr) {
    let k = arr[0]
    console.log(arr.slice(1,k+1));
    console.log(arr.slice(-k));
}


solve([2,1000,2000,3000])