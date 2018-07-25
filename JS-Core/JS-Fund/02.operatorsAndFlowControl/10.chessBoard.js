function chessBoard(n) {
    let chessBoard = "<div class=\"chessboard\">\n";
    for(let i = 0 ; i < n ; i++){
        chessBoard+='<div>\n';
        for(let k = 0 ; k < n ; k++){
            let colour = (i + k) % 2 ==0 ? "black" : "white";
            chessBoard+=`<span class="${colour}"></span>\n`
        }
        chessBoard+='</div>\n'
    }
    chessBoard+= "</div>\n";

    return chessBoard;
}

console.log(chessBoard(3));