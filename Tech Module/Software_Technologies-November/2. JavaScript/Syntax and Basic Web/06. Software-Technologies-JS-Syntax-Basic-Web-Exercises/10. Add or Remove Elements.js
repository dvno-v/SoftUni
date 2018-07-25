function addOrRemoveElements(input) {
    let result = [];
    for (let i = 0; i < input.length; i++) {
        let commandArgs = input[i].split(' ');
        let command = commandArgs[0];
        let argument = Number(commandArgs[1]);

        if (command == "add") {
            result.push(argument);
        }
        else if (command == "remove") {
            result.splice(argument, 1);
        }
    }

    console.log(result.join('\n'));
}

// Test:
addOrRemoveElements(["add 3", "add 5", "remove 1"]);