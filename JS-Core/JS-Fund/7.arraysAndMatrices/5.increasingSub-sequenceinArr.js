function a(arr) {
    "use strict";
    let num = Number(arr[0]);
    let result = [num]
    for(let i = 1; i<arr.length;i++){
        if(Number(arr[i])>= num){
            num = Number(arr[i]);
            result.push(num);
        }
    }
    console.log(result.join('\n'));
}
a([20,12,3,4,5,6,7,8,9]);
