let createCalculator = require('../07.Add_Subtract').createCalculator;
let expect = require('chai').expect;

describe("test", () => {
    let calc;
    beforeEach(function () {
       calc = createCalculator();
    });
    it('returns object', () => {
        expect(typeof calc).to.equal("object");
    });
    it('returns object', () => {
        expect(typeof calc).to.equal("object");
    });
    it('has prop add', () => {
        expect(calc.hasOwnProperty('add')).to.equal(true);
    });
    it('has prop subtract', () => {
        expect(calc.hasOwnProperty('subtract')).to.equal(true);
    });
    it('has prop get', () => {
        expect(calc.hasOwnProperty('get')).to.equal(true);
    });
    it('value === 0 with every new calc', () => {
        expect(calc.get()).to.equal(0);
    });
    it('adding is working', () => {
        calc.add(189);
        expect(calc.get()).to.equal(189);
    });
    it('subtracting is working', () => {
        calc.subtract(189);
        expect(calc.get()).to.equal(-189);
    });
    it('basic functionality', () => {
        calc.subtract(189);
        calc.add(188);
        expect(calc.get()).to.equal(-1);
    });
    it('add parsing is working', () => {
        calc.add('189');
        expect(calc.get()).to.equal(189);
    });
    it('subtract parsing is working', () => {
        calc.subtract('189');
        expect(calc.get()).to.equal(-189);
    });
    it('basic functionality using parsing', () => {
        calc.subtract('189');
        calc.add('188');
        expect(calc.get()).to.equal(-1);
    });
    it('basic functionality using parsing', () => {
        calc.subtract('-10');
        calc.add('188');
        expect(calc.get()).to.equal(198);
    });
});