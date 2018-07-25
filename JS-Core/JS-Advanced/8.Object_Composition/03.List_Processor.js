function solve(commandsArr) {
    let processor = (function () {
        let result = [];
        return {
            add: (value) => result.push(value),
            remove: (value) => result = result.filter(e => e !== value),
            print: () => console.log(result.join(","))
        }
    })();
    for (let commmandAndValue of commandsArr) {
        let commandTokens = commmandAndValue.split(" ");
        processor[commandTokens[0]](commandTokens[1]);
    }
}


(solve(['add hello', 'add again', 'remove hello', 'add again', 'print']));

solve(['add pesho', 'add gosho', 'add pesho', 'remove pesho','print'])
