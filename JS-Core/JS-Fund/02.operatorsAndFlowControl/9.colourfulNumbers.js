function colourfulNumbers(n) {

    let result = "<ul>\n";

    for(let i = 0; i<n ; i++){
        let colour = i % 2 ==0 ? "green" : "blue";
        result+=`<li><span style='color:${colour}'>${i+1}</span></li>\n`
    }

    result += "</ul>\n";

    console.log(result);
}

colourfulNumbers(5)