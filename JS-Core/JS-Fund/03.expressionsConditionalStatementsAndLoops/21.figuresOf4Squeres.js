function squeres(n) {
    let result = "";
    if (n % 2 == 0) {
        result = topMidBot(n)
    } else if (n % 2 !== 0) {
        result = topMidBot(n)
    }

    console.log(result)
}

function topMidBot(n) {
    let result = "+";
    for (let i = 0; i < n - 2; i++) {
        result += "-";
    }
    result += "+";
    for (let i = 0; i < n - 2; i++) {
        result += "-";
    }
    result += "+";
    return result;
}

squeres(4)