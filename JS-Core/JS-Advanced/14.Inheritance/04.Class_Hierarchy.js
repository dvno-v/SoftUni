let result = (() => {
    class Figure {
        constructor() {
            if (this.constructor == Figure) {
                throw new Error;
            }
        }

        get area() {
            let currentObjType = this.constructor;
            switch (currentObjType) {
                case Rectangle:
                    return this.width * this.height;
                case Circle:
                    return this.radius ** 2 * Math.PI;
            }
        }

        toString() {
            let currObjType = this.constructor.name;
            let props = Object.getOwnPropertyNames(this).map(p => `${p}: ${this[p]}`).join(", ");
            return currObjType + " - " + props;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height) {
            super();
            this.width = width;
            this.height = height;
        }
    }

    class Circle extends Figure {
        constructor(r) {
            super();
            this.radius = r;
        }
    }

    return {Figure, Circle, Rectangle};
})()
//TESTS
//let f = new Figure();       //Error
let c = new Circle(5);
console.log(c.area);        //78.53981633974483
console.log(c.toString());  //Circle - radius: 5
let r = new Rectangle(3, 4);
console.log(r.area);        //12
console.log(r.toString());  //Rectangle - width: 3, height: 4
