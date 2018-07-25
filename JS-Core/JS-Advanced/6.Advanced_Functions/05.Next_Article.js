function getArticleGenerator(arr) {
    let copy = Object.assign([], arr);
    let content = $("#content")
    return function (){
    if(copy.length>0) content.append($(`<article>${copy.shift()}</article>`))
    }
}