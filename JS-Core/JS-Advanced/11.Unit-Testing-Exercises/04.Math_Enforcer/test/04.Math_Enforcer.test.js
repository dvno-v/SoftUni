let mathEnforcer = require('../04.Math_Enforcer').mathEnforcer;
let expect = require('chai').expect;

describe("testing", () => {
    it("test if enforcer is object", () => {
        expect(typeof mathEnforcer).to.equal("object");
    });
    it("expect to have prop addFive", () => {
        expect(mathEnforcer.hasOwnProperty('addFive')).to.equal(true);
    });
    it("expect to addFive to be function", () => {
        expect(typeof mathEnforcer['addFive']).to.equal("function");
    });
    it("expect to have prop subtractTen", () => {
        expect(mathEnforcer.hasOwnProperty('subtractTen')).to.equal(true);
    });
    it("expect to subtractTen to be function", () => {
        expect(typeof mathEnforcer['subtractTen']).to.equal("function");
    });
    it("expect to have prop sum", () => {
        expect(mathEnforcer.hasOwnProperty('sum')).to.equal(true);
    });
    it("expect to sum to be function", () => {
        expect(typeof mathEnforcer['sum']).to.equal("function");
    });
    it("expect to return undefined if param is not a number in addFive", () => {
        expect(mathEnforcer.addFive('gosho')).to.equal(undefined);
    });
    it("expect to return undefined if param is not a number in addFive", () => {
        expect(mathEnforcer.addFive(['gosho'])).to.equal(undefined);
    });
    it("expect to return undefined if param is not a number in addFive", () => {
        expect(mathEnforcer.addFive({gosho: 'gosho'})).to.equal(undefined);
    });
    it("expect to return undefined if param is not a number in subtractTen", () => {
        expect(mathEnforcer.subtractTen('gosho')).to.equal(undefined);
    });
    it("expect to return undefined if param is not a number in subtractTen", () => {
        expect(mathEnforcer.subtractTen(['gosho'])).to.equal(undefined);
    });
    it("expect to return undefined if param is not a number in subtractTen", () => {
        expect(mathEnforcer.subtractTen({gosho: 'gosho'})).to.equal(undefined);
    });
    it("expect to return undefined if params are not numbers in sum", () => {
        expect(mathEnforcer.sum('gosho', 2)).to.equal(undefined);
    });
    it("expect to return undefined if params are not numbers in sum", () => {
        expect(mathEnforcer.sum(['gosho'], 2)).to.equal(undefined);
    });
    it("expect to return undefined if params are not numbers in sum", () => {
        expect(mathEnforcer.sum({goshi: 'gosho'}, 2)).to.equal(undefined);
    });
    it("expect to return undefined if params are not numbers in sum", () => {
        expect(mathEnforcer.sum(1, 'gosho')).to.equal(undefined);
    });
    it("expect to return undefined if params are not numbers in sum", () => {
        expect(mathEnforcer.sum(1, ['gosho'])).to.equal(undefined);
    });
    it("expect to return undefined if params are not numbers in sum", () => {
        expect(mathEnforcer.sum(1, {gosho: 'gosho'})).to.equal(undefined);
    });
    it("expect to return undefined if params are not numbers in sum", () => {
        expect(mathEnforcer.sum({}, {})).to.equal(undefined);
    });
    it("expect to return undefined if params are not numbers in sum", () => {
        expect(mathEnforcer.sum([], [])).to.equal(undefined);
    });
    it("expect to return undefined if params are not numbers in sum", () => {
        expect(mathEnforcer.sum('', '')).to.equal(undefined);
    });
    //positive and full numbers
    it('should return 15 while using addFive with 10', () => {
        expect(mathEnforcer.addFive(10)).to.equal(15)
    });
    it('should return 15 while using subtractTen with 25', () => {
        expect(mathEnforcer.subtractTen(25)).to.equal(15)
    });
    it('should return 15 while using sum with 10 and 5', () => {
        expect(mathEnforcer.sum(10, 5)).to.equal(15)
    });
    //positive fractions
    it('should return 15.5 while using addFive with 10.5', () => {
        expect(mathEnforcer.addFive(10.5)).to.be.closeTo(15.5,0.0001)
    });
    it('should return 15.5 while using subtractTen with 25.5', () => {
        expect(mathEnforcer.subtractTen(25.5)).to.be.closeTo(15.5,0.0001)
    });
    it('should return 15.5 while using sum with 10 and 5.5', () => {
        expect(mathEnforcer.sum(10, 5.5)).to.be.closeTo(15.5,0.0001)
    });
    //negative numbers
    it('should return -5 while using addFive with -10', () => {
        expect(mathEnforcer.addFive(-10)).to.equal(-5)
    });
    it('should return -15 while using subtractTen with -5', () => {
        expect(mathEnforcer.subtractTen(-5)).to.equal(-15)
    });
    it('should return -15 while using sum with -10 and -5', () => {
        expect(mathEnforcer.sum(-10, -5)).to.equal(-15)
    });
    //negative fractions
    it('should return 0.5 while using addFive with -4.5', () => {
        expect(mathEnforcer.addFive(-4.5)).to.be.closeTo(0.5,0.0001)
    });
    it('should return 15.5 while using subtractTen with -5.5', () => {
        expect(mathEnforcer.subtractTen(-5.5)).to.be.closeTo(-15.5,0.0001)
    });
    it('should return -15.5 while using sum with -10 and -5.5', () => {
        expect(mathEnforcer.sum(-10, -5.5)).to.be.closeTo(-15.5,0.0001)
    });
    it('should return -15.5 while using sum with -10 and -5.5', () => {
        expect(mathEnforcer.sum(-10.5, -5)).to.be.closeTo(-15.5,0.0001)
    });
});