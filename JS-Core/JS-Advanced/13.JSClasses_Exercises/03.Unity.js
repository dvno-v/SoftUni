class Rat{
    constructor(name){
        this.name = name;
        this.unitedRats = [];
    }
    getRats(){
        return this.unitedRats;
    }
    toString(){
        let result ='';
        result += this.name + "\n";
        let united = this.getRats();
        for (let rat of united) {
            result += `##${rat.name}\n`
        }
        return result;
    }
    unite(possiblyRat){
        if(possiblyRat instanceof Rat){
            this.unitedRats.push(possiblyRat);
        }
    }
}

let test = new Rat("Pesho");
console.log(test.toString()); //Pesho

console.log(test.getRats()); //[]

test.unite(new Rat("Gosho"));
test.unite(new Rat("Sasho"));
console.log(test.getRats());
//[ Rat { name: 'Gosho', unitedRats: [] },
//  Rat { name: 'Sasho', unitedRats: [] } ]

console.log(test.toString());
// Pesho
// ##Gosho
// ##Sasho
