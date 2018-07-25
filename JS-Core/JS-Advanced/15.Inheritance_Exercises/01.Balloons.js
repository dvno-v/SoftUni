function solve() {
    class Balloon{
        constructor(colour, gasWeight){
            this.color = colour;
            this.gasWeight = gasWeight;
        }
    }
    class PartyBalloon extends Balloon{
        constructor(colour, gasWeight, ribbonColor ,ribbonLength ){
            super(colour, gasWeight);
            this._ribbon = {color: ribbonColor ,length: ribbonLength};
        }
        get ribbon(){
            return this._ribbon;
        }
    }
    class BirthdayBalloon extends PartyBalloon{
        constructor(colour, gasWeight, ribbonColor ,ribbonLength, text){
            super(colour, gasWeight, ribbonColor ,ribbonLength);
            this._text = text;
        }
        get text(){
            return this._text;
        }
    }

    return {
        Balloon,
        PartyBalloon,
        BirthdayBalloon
    }
}

let classes = solve();

let test = new classes.PartyBalloon("Tumno-bqlo", 20.5, "Svetlo-cherno", 10.25);

console.log(test.ribbon);