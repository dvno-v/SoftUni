function solve(arr) {
    function areDiagonalSumsEqual(matriks) {
        let areEqualAndSum = [];
        let sum1 = 0;
        let sum2 = 0;
        for (let i = 0; i < matriks.length; i++) {
            sum1 += Number(matriks[i][i]);
            sum2 += Number(matriks[i][matriks.length - i - 1])
        }
        let areEqual = sum1 === sum2;
        areEqualAndSum = [areEqual, sum1];
        return areEqualAndSum;
    }
    function getDiagonalIndices(matriks) {
        let positionsDiagonal1 = [];
        let positionsDiagonal2 = [];
        for (let i = 0; i < matriks.length; i++) {
            positionsDiagonal1.push(i);
            positionsDiagonal2.push(matriks.length - i - 1);
        }
        let positions = [positionsDiagonal1, positionsDiagonal2];
        return positions;
    }
    function print(matriks) {
        for(let i = 0; i<matriks.length; i++){
            console.log(matriks[i].join(" "));
        }
    }
    let matrix = [];
    for (let i = 0; i < arr.length; i++) {
        let strArr = arr[i].split(' ');
        let intArr = strArr.map(Number);
        matrix.push(intArr);
    }
    let sumAndEqual = areDiagonalSumsEqual(matrix);
    let equal = sumAndEqual[0];
    let sum = sumAndEqual[1];
    if (equal) {
        let positions = getDiagonalIndices(matrix)
        let positionsOfDiagonalIndices1 = positions[0];
        let positionsOfDiagonalIndices2 = positions[1];
        for (let i = 0; i < matrix.length; i++) {
            for (let k = 0; k < matrix[i].length; k++) {
                if (positionsOfDiagonalIndices1[i] != k && positionsOfDiagonalIndices2[i] != k ) {
                    matrix[i][k] = sum;
                }
            }
        }
        print(matrix)
    } else {
        print(matrix);
    }

}
solve(['1 1 1',
    '1 1 1',
    '1 1 0']);
solve(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);
