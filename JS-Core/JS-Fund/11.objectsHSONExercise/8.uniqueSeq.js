function a(matrikx) {
    for (let arr of matrikx) {
        arr = arr.sort((a,b) => a-b);
    }
    for (let i = 0; i < matrikx.length; i++) {
        for (let j =i+1; j < matrikx.length; j++) {
            if(isIdentical(matrikx[i], matrikx[j])){
                matrikx.splice(j,1);
            }
        }
    }
    matrikx.sort((a,b) => a.length - b.length).forEach(a => console.log('[' + a.join(", ") + ']'));


    function isIdentical(arr1,arr2) {
        if(arr1.length == arr2.length){
            if(arr1.toString()==arr2.toString()){
                return true
            }
        }
        return false;
    }
}

a([
    [-3, -2, -1, 0, 1, 2, 3, 4],
        [10, 1, -17, 0, 2, 13],
        [4, -3, 3, -2, 2, -1, 1, 0]
])