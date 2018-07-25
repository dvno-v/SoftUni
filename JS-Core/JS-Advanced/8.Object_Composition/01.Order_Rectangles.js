function solve(rectangleArr) {
    let rectangleObjectsArr = [];
    function createRectangle(width, height) {
        let rectangle = {
            width : width,
            height : height,
            area: () => rectangle.width * rectangle.height,
            compareTo: function compare(other) {
                if(other.area() === this.area()){
                    return  other.width - this.width;
                }else{
                    return  other.area() - this.area();
                }
            }
        };
        return rectangle;
    }
    for(let i = 0; i<rectangleArr.length; i++){
        let rec = rectangleArr[i];
        rectangleObjectsArr.push(createRectangle(rec[0], rec[1]))
    }
    return rectangleObjectsArr.sort((a,b) => a.compareTo(b));
}


console.log(solve([[10, 5], [5, 12]]));
console.log('---------------')
console.log(solve([[1,20],[20,1],[5,3],[5,3]]));
