function solve(matrix) {
    let counter = 0;
    for(let i = 0; i<matrix.length;i++){
        for(let k = 0; k<matrix[i].length; k++){
            if(i!=matrix.length-1 && matrix[i][k]==matrix[i+1][k]){
                counter++;
            }
            if(matrix[i][k]==matrix[i][k+1]){
                counter++
            }
        }
    }
    return counter;
}

console.log(solve([['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]
));
console.log(solve([['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]
));