class Stringer {
    constructor(string, lenght) {
        //initial state of the string and its length
        this.initialString = string;
        //current state of the string and its length
        this.innerString = string;
        this.innerLength = lenght;
    }

    decrease(value) {
        if(this.innerLength - value<=0){
            this.innerString = "...";
            this.innerLength = 0;
        }else{
            this.innerString = this.innerString.slice(0,this.innerLength-value) + "..."
            this.innerLength -= value;
        }
    }
    increase(value) {
       this.innerString = this.initialString.slice(this.innerLength,value);
           this.innerLength += value;
    }
    toString() {
        return this.innerString;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString()); //...

test.increase(4);
console.log(test.toString()); //Test
