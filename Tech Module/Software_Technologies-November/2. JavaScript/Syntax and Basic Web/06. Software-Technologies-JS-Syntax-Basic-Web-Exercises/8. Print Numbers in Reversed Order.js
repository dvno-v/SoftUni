function printReversedNums(input) {
    input.reverse();
    for (num of input) {
        console.log(num);
    }
}

// Test:
printReversedNums(["1", "2", "3"]);
