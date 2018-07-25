function aggregate(arr) {
    function reducerFunc(arr, func) {
        let result = arr[0];
        for (let i = 1; i < arr.length; i++) {
            result = func(result,arr[i]);
        }
        return result;
    }
    console.log("Sum = " + reducerFunc(arr,(a,b) => Number(a)+Number(b)))
    console.log("Min = " + reducerFunc(arr,(a,b) => Math.min(a,b)))
    console.log("Max = " + reducerFunc(arr,(a,b) => Math.max(a,b)))
    console.log("Product = "+ reducerFunc(arr,(a,b) => a*b))
    console.log("Join = " + reducerFunc(arr,(a,b) => ""+a+b))
}


aggregate([1,2,3,4,5,6]);