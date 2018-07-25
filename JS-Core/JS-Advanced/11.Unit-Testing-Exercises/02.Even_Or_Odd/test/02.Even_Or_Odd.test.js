let isOddOrEven = require('../02.Even_Or_Odd').isOddOrEven;
let expect = require('chai').expect;

describe("testing the isOddOrEven function", () => {
    it("should return undefined if input isnt string", () => {
        expect(isOddOrEven(124)).to.be.undefined;
    });
    it("should return even if input is empty string", () => {
        expect(isOddOrEven('')).to.equal('even');
    });
    it("should return even if input.lenght is even", () => {
        expect(isOddOrEven("as")).to.equal('even');
    });
    it("should return even if input,lenght is odd", () => {
        expect(isOddOrEven("asd")).to.equal('odd');
    });
    it("should return undefined if input isnt string", () => {
        expect(isOddOrEven([])).to.be.undefined;
    });
    it("should return undefined if input isnt string", () => {
        expect(isOddOrEven({gosho:"GOSHO"})).to.be.undefined;
    });
    it("should return undefined if input isnt string", () => {
        expect(isOddOrEven({gosho:"GOSHO"})).to.be.undefined;
    });
});