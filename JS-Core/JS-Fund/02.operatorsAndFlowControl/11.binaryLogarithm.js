function binaryLogarithm(arr) {
    for(let num of arr){
        let power = Math.log2(num);
        console.log(power);
    }
}

binaryLogarithm([1024,2048,8,16,32]);