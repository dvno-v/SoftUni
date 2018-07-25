function solve(text) {
    let result = [];
    let open = text.indexOf("(");
    while(open!==-1){
        let close = text.indexOf(")",open);
        if(close === -1 ) break;
        result.push(text.substring(open+1,close));
        open = text.indexOf("(",close + 1);
    }

    console.log(result.join(", "))
}

solve('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)')