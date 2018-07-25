function solve(matrix) {
    let diagonalSum1 = 0;
    let diagonalSum2 = 0;
    for(let i = 0; i <matrix.length; i++){
        diagonalSum1+=Number(matrix[i][i]);
    }
    for(let i = 0; i< matrix.length; i++){
        let nestedArrLenght = matrix[i].length
        diagonalSum2+=Number(matrix[i][nestedArrLenght-i-1]);
    }
    console.log(diagonalSum1 + " " + diagonalSum2);
}

solve([[20, 40],
    [10, 60]]);
solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
)