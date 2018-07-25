function isPositiveProduct(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let z = Number(input[2]);
    if((x < 0 && y >= 0 & z >= 0)
    || (x >= 0 && y < 0 & z >= 0)
    || (x >= 0 && y >= 0 & z < 0)
    || (x < 0 && y < 0 & z < 0)) {
        console.log('Negative');
    }
    else {
        console.log('Positive');
    }
}

// Test:
isPositiveProduct(["-3", "-4", "5"]);