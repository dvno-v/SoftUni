class Rectangle{
    constructor(width, height, colour){
        this.width = width;
        this.height = height;
        this.color = colour;
    }

    calcArea(){
        return this.width * this.height;
    }
}


let rect = new Rectangle(1,2,"red");
console.log(rect.calcArea());