function printLines(input) {
    let i = 0;
    while (input[i] != "Stop") {
        console.log(input[i]);
        i++;
    }
}

// Test:
printLines(["1", "2", "3", "Stop", "99"]);