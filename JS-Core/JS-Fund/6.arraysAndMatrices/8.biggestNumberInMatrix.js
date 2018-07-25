function biggest(arr) {
    let largest = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i< arr.length; i++){
        for(let k = 0; k<arr[i].length; k++){
            if(arr[i][k]>largest){
                largest = arr[i][k];
            }
        }
    }
    return largest;
}
arr=>Math.max.apply(null,arr.reduce((a,b) => a.concat(b)))
}
(biggest2([[1, 2, 3, 4, 5, 100000],
    [3, 4, 5, 99999999],
    [-100, 2]]));