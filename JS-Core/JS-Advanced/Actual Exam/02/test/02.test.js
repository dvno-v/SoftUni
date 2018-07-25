let Calculator = require('../02').Calculator;
let expect = require('chai').expect;

describe("Unit testing", () => {
    let calc;
    beforeEach(() => {
        calc = new Calculator()
    });
    describe("has basic props and funcs", () => {
        it("has expenses prop", () => {
            expect(calc.expenses).to.be.an("array");
        });
        it("has add func", () => {
            expect(calc.add).to.be.an("function");
        });
        it("has divideNums func", () => {
            expect(calc.divideNums).to.be.an("function");
        });
        it("has toString func", () => {
            expect(calc.toString).to.be.an("function");
        });
        it("has orderBy func", () => {
            expect(calc.orderBy).to.be.an("function");
        });
    });
    describe("add functionality", () => {
        it('can add anything', () => {
            calc.add("gosho");
            calc.add(2);
            calc.add({as: "always"});
            calc.add([1, 2, 3, 4]);
            expect(calc.expenses.length).to.equal(4);
        });
    });
    describe("devideNums functionality", () => {
        it("should throw error if no numbers in this.expenses", () => {
            calc.add({as: "always"});
            calc.add("gosho");
            calc.add([1, 2, 3, 4]);
            expect(function () {
                calc.divideNums()
            }).to.throw(Error)
        });
        it("shouldn't devide if there is a zero", () => {
            calc.add(2);
            calc.add(0);
            expect(calc.divideNums()).to.equal("Cannot divide by zero");
        });

        it('should devide everything by the this.expenses[0]', () => {
            calc.add(2);
            calc.add(1);
            calc.add(2);
            expect(calc.divideNums()).to.be.closeTo(1, 0.001);
        });
        it('should devide everything by the this.expenses[0]', () => {
            calc.add(2);
            calc.add(1);
            calc.add(2);
            calc.add(2);
            expect(calc.divideNums()).to.be.closeTo(0.5, 0.001);
        });
        it('should devide everything by the this.expenses[0]', () => {
            calc.add(0);
            calc.add(1);
            calc.add(2);
            calc.add(2);
            expect(calc.divideNums()).to.be.closeTo(0, 0.001);
        });
        it('should divide (even with negative numbers) everything by the this.expenses[0]', () => {
            calc.add(1);
            calc.add(1);
            calc.add(-2);
            expect(calc.divideNums()).to.be.closeTo(-0.5, 0.001);
        });
        it('should devide (even with negative numbers) everything by the this.expenses[0]', () => {
            calc.add(2);
            calc.add(1);
            calc.add(-2);
            expect(calc.divideNums()).to.be.closeTo(-1, 0.001);
        });
        it('divide should work with fractions', () => {
            calc.add(10);
            calc.add(0.1);
            expect(calc.divideNums()).to.be.closeTo(100, 0.001);
        });
        it('divide should work with negative fractions', () => {
            calc.add(10);
            calc.add(-0.1);
            expect(calc.divideNums()).to.be.closeTo(-100, 0.001);
        });
    });
    describe('orderBy functionality', () => {
        it('should return array in ascending order if there are only nums', () => {
            calc.add(1);
            calc.add(10);
            calc.add(15);
            calc.add(19);
            expect(calc.orderBy()).to.equal('1, 10, 15, 19');
        });
        it('shoult return empty if this.expenses is empty', () => {
            expect(calc.orderBy()).to.equal('empty');
        });
        it('shoult return array sorted in alphabetical order', () => {
            calc.add(2);
            calc.add('pesho');
            calc.add('gosho');
            calc.add([1, 2]);
            calc.add({});
            expect(calc.orderBy()).to.equal('1,2, 2, [object Object], gosho, pesho');
        });
        it('should return array in ascending order if there are only nums', () => {
            calc.add(-1);
            calc.add(15);
            calc.add(-10);
            calc.add(19);
            expect(calc.orderBy()).to.equal('-10, -1, 15, 19');
        });
    });
    describe("toString func", () => {
        it('return string from arr', () => {
            calc.add(-1);
            calc.add(15);
            calc.add(-10);
            calc.add(19);
            expect(calc.toString()).to.equal('-1 ->  15 -> -10 -> 19');
        });
        it('should return empty if this.expenses is empty', () => {
            expect(calc.toString()).to.equal('empty array');
        });
    });
});