let result = (function () {
    let Suits = {
        SPADES: "♠",
        HEARTS: "♥",
        DIAMONDS: "♦",
        CLUBS: "♣"
    };
    class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        get face() {
            return this._face;
        }

        set face(value) {
            if (!this.validFaces.includes(value)) {
                throw new Error("Invalid face")
            }
            this._face = value;
        }

        get suit() {
            return this._suit;
        }

        set suit(value) {
            if (!(Object.keys(Suits).map(e => Suits[e])).includes(value))
                throw new Error("Invalid Suit")
            this._suit = value;
        }
        get validFaces(){
           return ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        }
    }

    return {
        Suits: Suits,
        Card: Card
    }
}());

let newCards = result.Card;
let suits = result.Suits;

let card = new newCards('2', suits.CLUBS);
card.face = "1";
let card1= new newCards('1', suits.CLUBS);
