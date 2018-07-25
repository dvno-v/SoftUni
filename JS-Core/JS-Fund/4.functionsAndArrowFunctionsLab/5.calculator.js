function calculator(a, b, op) {
    function calc(a, b, func) {
        return func(a, b);
    }

    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;
    let multiply = (a, b) => a * b;
    let devise = (a, b) => a / b;
    switch (op) {
        case '+':
            console.log(calc(a, b, add));;
            break;
        case '-':
            console.log(calc(a, b, subtract));;
            break;
        case '*':
            console.log(calc(a, b, multiply));;
            break;
        case '/':
            console.log(calc(a, b, devise));
            break;
    }
}

calculator(2,3,"*")