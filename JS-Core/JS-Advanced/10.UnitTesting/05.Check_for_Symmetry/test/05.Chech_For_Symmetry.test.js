let isSymmetric = require('../05.Check_for_Symmetry.js').isSymmetric;
let expect = require('chai').expect;

describe("Checking the isSymetric function", () => {
    it('is it a function', () => {
        expect(typeof isSymmetric).to.equal("function");
    })
    it('invalid input should give false', () => {
        expect(isSymmetric('gosho')).to.equal(false)
    });
    it('normal usage for symetric arr shoud return true', () => {
        expect(isSymmetric(['gosho', 'gosho'])).to.equal(true)
    });
    it('having only one param in the array should return true', () => {
        expect(isSymmetric(['gosho'])).to.equal(true)
    });
    it('empty array should return true', () => {
        expect(isSymmetric([])).to.equal(true)
    });
    it('not a symetric array should return false', () => {
        expect(isSymmetric([1, 2, 3, 4, 5])).to.equal(false)
    });
    it('symetric array with odd Lenght should return true', () => {
        expect(isSymmetric([1, 2, 1])).to.equal(true)
    });
    it('not a symetric array with odd Lenght should return false', () => {
        expect(isSymmetric([1, 2, 3])).to.equal(false);
    });
    it('not a symetric array with even Lenght should return false', () => {
        expect(isSymmetric([1, 2, 3, 4])).to.equal(false);
    });
    it('works with negative numbers', ()=>{
        expect(isSymmetric([-1,2,-1])).to.equal(true);
    });
    it('works with negative numbers', ()=>{
        expect(isSymmetric([-1,2,1])).to.equal(false);
    });
    it('works with everything you put in the array', ()=>{
        expect(isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi',5])).to.equal(true);
    });
    it('works with everything you put in the array', ()=>{
        expect(isSymmetric([5,'hi',{a:5},new Date(),{X:5},'hi',5])).to.equal(false);
    });
});