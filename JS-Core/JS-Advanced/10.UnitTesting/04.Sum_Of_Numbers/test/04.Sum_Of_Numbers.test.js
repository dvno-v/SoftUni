let sum = require('../04.Sum_Of_Numbers').sum;
let expect = require('chai').expect;

describe("Testing sum function", () => {
    it('should return NaN if input != array', () => {
        expect(sum("pesho")).to.be.NaN;
    });
    it('simple equation', () => {
        expect(sum([1, 2, 3])).to.equal(6);
    });
    it('empty array as input should equal to 0', () => {
        expect(sum([])).to.equal(0);
    });
    it('getting array of string numbers should parse them', () => {
        expect(sum(['1', '2'])).to.equal(3);
    });
    it('one param should equal to the same thing', () => {
        expect(sum(['1'])).to.equal(1);
    })
    it('one param should equal to the same thing', () => {
        expect(sum([1])).to.equal(1);
    })
    it('getting string as a part of arr should equal NaN', () => {
        expect(sum([1, 'two', 3])).to.be.NaN;
    })
});