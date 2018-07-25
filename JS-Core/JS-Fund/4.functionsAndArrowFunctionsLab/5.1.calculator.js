function calculator(a, b, op) {
    function calc(a, b, func) {
        return func(a, b);
    }
    switch (op) {
        case '+':
            console.log(calc(a, b, (a, b) => a + b));
            break;
        case '-':
            console.log(calc(a, b, (a, b) => a - b));
            break;
        case '*':
            console.log(calc(a, b, (a, b) => a * b));
            break;
        case '/':
            console.log(calc(a, b, (a, b) => a / b));
            break;
    }
}

calculator(2,3,"*")