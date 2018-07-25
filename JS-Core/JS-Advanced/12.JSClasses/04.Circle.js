class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get radius() {
        return this._radius;
    }

    set radius(value) {
        this._radius = value;
        this._diameter  = this.radius*2;
    }
    get diameter() {
        return this._diameter;
    }

    set diameter(value) {
        this._diameter  = value;
        this._radius = value/2;
    }
    get area(){
        return Math.PI * this.radius**2;
    }
}

let c1 = new Circle(5);

console.log(c1.diameter);
c1.diameter = 8;
console.log(c1.diameter);
