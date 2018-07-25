function solve([x1,y1,x2,y2]){
    function isInt(number) {
        let isInt = number % 1 == 0 ? true : false;
        return isInt;
    }
    let distance = (x1,y1,x2,y2) => Math.sqrt((x2-x1)**2 + (y2-y1)**2);
    function checkIfValid(a,b,c,d) {
        if(isInt(distance(a,b,c,d))){
            console.log(`{${a}, ${b}} to {${c}, ${d}} is valid`)
        }else{
            console.log(`{${a}, ${b}} to {${c}, ${d}} is invalid`)
        }
    }
    checkIfValid(x1,y1,0,0);
    checkIfValid(x2,y2,0,0);
    checkIfValid(x1,y1,x2,y2);
}

solve([3, 0, 0, 4]);
solve([2, 1, 1, 1])