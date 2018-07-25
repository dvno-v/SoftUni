function numberCoocking(arr) {
    function operators(operator) {
        switch (operator){
            case "chop": return a=> a/2;
            case "dice": return a=> Math.sqrt(a);
            case "spice": return a=> a+1;
            case "bake": return a=> a*3;
            case "fillet": return a=> a - (a*20/100);
        }
    }
    let ogNumber = Number(arr[0]);
    for(let i = 1 ; i< arr.length; i++){
        let operator = operators(arr[i]);
        console.log(operator(ogNumber));
        ogNumber = operator(ogNumber);
    }
}

numberCoocking([256, 'chop', 'chop', 'chop', 'chop', 'fillet']);