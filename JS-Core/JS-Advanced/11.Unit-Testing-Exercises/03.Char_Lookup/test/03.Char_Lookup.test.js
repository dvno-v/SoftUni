let lookupChar = require('../03.Char_Lookup').lookupChar;
let expect = require('chai').expect;

describe('checking functionality for lookupChar func', ()=>{
    it('should return undefined if the string param is not string',()=>{
        expect(lookupChar(1,2)).to.be.undefined;
    });
    it('should return undefined if the string param is not string',()=>{
        expect(lookupChar({asd:"iskam da umra e bro"},2)).to.be.undefined;
    });
    it('should return undefined if the string param is not string',()=>{
        expect(lookupChar([],2)).to.be.undefined;
    });
    it('should return undefined if the index param is not a number',()=>{
        expect(lookupChar('pesho','johny')).to.be.undefined;
    });
    it('should return undefined if the index param is not a number',()=>{
        expect(lookupChar('pesho',[])).to.be.undefined;
    });
    it('should return undefined if the index param is not a number',()=>{
        expect(lookupChar('pesho',{pedro_Rodriges:"basi"})).to.be.undefined;
    });
    it("should return incorrect index if index is outside the boundries",()=>{
        expect(lookupChar('pesho',-1)).to.equal("Incorrect index");
    });
    it("should return incorrect index if index is outside the boundries",()=>{
        expect(lookupChar('pesho',1120)).to.equal("Incorrect index");
    });
    it("should return incorrect index if index is a fraction",()=>{
        expect(lookupChar('pesho',1.1)).to.equal(undefined);
    });
    it("should return incorrect index if input string is an empty string",()=>{
        expect(lookupChar('',0)).to.equal("Incorrect index");
    })
    it("should return incorrect index if index is outside the boundries",()=>{
        expect(lookupChar('pesho',5)).to.equal("Incorrect index");
    });
    it('should return o if string is ostyr and index is 0',()=>{
        expect(lookupChar('ostyr', 0)).to.equal('o');
    });
    it('should return o if string is ostyr and index is 0',()=>{
        expect(lookupChar('gazostranciq', 2)).to.equal('z');
    });
});