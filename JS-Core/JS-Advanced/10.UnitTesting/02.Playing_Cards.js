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


console.log(makeCard('1', 'S').toString());