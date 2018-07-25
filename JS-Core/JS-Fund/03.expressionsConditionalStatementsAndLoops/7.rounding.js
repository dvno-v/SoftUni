function round(arr) {
    let number = arr[0];
    let stringNumber = number.toString();
    let numberLenght = stringNumber.length;
    let n = Number(arr[1]); if(n>15)n = 15;
    let count = 0
    for(let i = 0; i < numberLenght; i++){
        if(stringNumber[i]=='.'){
            break;
        }else count++;
    }
    if(count+n>=numberLenght){
        console.log(number.toFixed(1))
    }else{
        console.log(number.toFixed(n));
    }
}


round([3.1415926535897932384626433832795, 2]);
round([10.5,15]);