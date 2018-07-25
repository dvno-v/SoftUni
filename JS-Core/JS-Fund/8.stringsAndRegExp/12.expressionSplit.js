function split(text) {
    let result = text.split(/[/\s(),\./;]+/g);
    for(let word of result){
        console.log(word);
    }
}

split("iskam da umra, deeba(kucheee)")