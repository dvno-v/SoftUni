function printDeckOfCards(cardArr) {
    function makeCard(face, suit) {
        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const validSuits = ['S', 'H', 'D', 'C'];
        if (!validFaces.includes(face)) {
            throw new Error("Error")
        }
        if (!validSuits.includes(suit)) {
            throw new Error("Error")
        }
        let charSuits = {S: '\u2660', H: '\u2665', D: '\u2666', C: '\u2663' };
        let card = {
            face: face,
            suit:charSuits[suit],
            toString: () =>{
                return `${card.face}${card.suit}`
            }
        };
        return card;
    }
    let allCards = [];
    for (let cardFaceAndSuit of cardArr) {
        let face = cardFaceAndSuit.slice(0, cardFaceAndSuit.length - 1);
        let suit = cardFaceAndSuit[cardFaceAndSuit.length-1];
        try {
            allCards.push(makeCard(face,suit))
        }catch (err){
            console.log(`Invalid card: ${cardFaceAndSuit}`);
            return;
        }
    }
    console.log(allCards.join(" "));
}

console.log(printDeckOfCards(['AS', '10D', 'KH', '2C']));

console.log(printDeckOfCards(['5S', '3D', 'QD', '1C']));