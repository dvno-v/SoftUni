function toUpper(str) {
    str = str.toUpperCase();
    let words = spliting(str);
    words = words.filter(w => w !== ""); //filtering
    return words.join(', ');
    function spliting(string){
        return string.split(/\W+/);
    }
}

console.log(toUpper("iskam li da umra, mai da"))