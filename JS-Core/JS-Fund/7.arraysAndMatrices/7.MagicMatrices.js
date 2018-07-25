function solve(matrix) {
    let currnetColSum = 0;let firstColSum = 0;
    let currentRowSum = 0;let firstRowSum = 0;
    let areColSumsEqual = true;    let areRowSumsEqual = true;
    for(let i = 0; i< matrix.length; i++){
        currnetColSum = 0;
        for( let k = 0; k<matrix.length; k++){
            currnetColSum+= matrix[k][i];
        }
        if(firstColSum=== 0 ){
            firstColSum = currnetColSum;
        }
        if(currnetColSum !== firstColSum){
            areColSumsEqual = false;
        }
    }
    for(let i = 0; i< matrix.length; i++){
        currentRowSum = 0;
        for( let k = 0; k<matrix[i].length; k++){
            currentRowSum+= matrix[i][k];
        }
        if(firstRowSum === 0 ){
            firstRowSum = currentRowSum;
        }
        if(firstRowSum !== currentRowSum){
            areRowSumsEqual = false;
        }
    }
    console.log(areColSumsEqual && areRowSumsEqual);
}

