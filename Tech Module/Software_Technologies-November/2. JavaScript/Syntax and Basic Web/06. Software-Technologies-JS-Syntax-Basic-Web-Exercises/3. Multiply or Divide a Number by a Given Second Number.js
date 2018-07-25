function multiplyOrDivide(input) {
    let n = Number(input[0]);
    let x = Number(input[1]);
    if (x >= n) {
        return x * n;
    }
    else {
        return n / x;
    }
}

// Test:
console.log(multiplyOrDivide(["3", "2"]));
