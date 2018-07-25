let processor = (function (commandArr) {
    let text = "";
    for (let command of commandArr) {
        let commandsTokens = command.split(" ");
        switch (commandsTokens[0]){
            case"append":
                text+= commandsTokens[1];
                break;
            case"print":
                console.log(text);
                break;
            case"removeStart":
                text = text.slice(Number(commandsTokens[1]));
                break;
            case"removeEnd":
                text = text.slice(0 , text.length - Number(commandsTokens[1]));
                break;
        }
    }
});
processor(['append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print']);