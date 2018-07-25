function solve(arr){
    "use strict";
    let delimiter = arr.pop();
    console.log(arr.join(delimiter));
}
solve([1,2,3,4,5,"+"])