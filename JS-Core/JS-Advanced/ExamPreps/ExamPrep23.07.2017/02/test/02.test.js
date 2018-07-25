let Sumator = require('../02').Sumator;
let expect = require('chai').expect;

describe("unit testing", () => {
    let sumator;
    beforeEach(() => {
        sumator = new Sumator();
    });
    describe("basic props", () => {
        it('has prop data', () => {
            expect(sumator.data).to.be.an('array');
        });
        it('has add func ', () => {
            expect(sumator.add).to.be.an('function');
        });
        it('has sumNums func ', () => {
            expect(sumator.sumNums).to.be.an('function');
        });
        it('has func removeByFilter ', () => {
            expect(sumator.removeByFilter).to.be.an('function');
        });
        it('has toString func ', () => {
            expect(sumator.toString).to.be.an('function');
        });
    });
    describe('basic funtionality', () => {
        describe('add func', () => {
            it('should add', () => {
                sumator.add(2);
                expect(sumator.data[0]).to.equal(2);
            });
            it('should add arrays', () => {
                sumator.add([]);
                expect(sumator.data[0]).to.be.an('array');
            });
            it('should add objects', () => {
                sumator.add({});
                expect(sumator.data[0]).to.be.an('object');
            });
            it('should add strings', () => {
                sumator.add('as');
                expect(sumator.data[0]).to.be.an('string');
            });
        });
        describe("sumNums funcionality", () => {
            it("sum only sums numbers also fractions", () => {
                sumator.add(2);
                sumator.add(3);
                sumator.add(4);
                sumator.add(5.1);
                sumator.add("gosho");
                sumator.add([1, 2, 3, 4]);
                sumator.add({as: "always"});
                expect(sumator.sumNums()).to.be.closeTo(14.1, 0.001);
            });
        });
        describe("remove by filter func", () => {
            it("should filter all numbers below 5", () => {
                sumator.add(2);
                sumator.add(3);
                sumator.add(4);
                sumator.add(6);
                sumator.add(8);
                sumator.removeByFilter(function (x) {
                    return x < 5;
                });
                expect(sumator.data.length).to.equal(2)
            });
            it("should filter all numbers above 5", () => {
                sumator.add(2);
                sumator.add(3);
                sumator.add(4);
                sumator.add(6);
                sumator.add(8);
                sumator.removeByFilter(function (x) {
                    return x > 5;
                });
                expect(sumator.data.length).to.equal(3)
            });
            it("should filter all even numbers", () => {
                sumator.add(2);
                sumator.add(3);
                sumator.add(4);
                sumator.add(6);
                sumator.add(8);
                sumator.removeByFilter(function (x) {
                    return x % 2 === 0;
                });
                expect(sumator.data.length).to.equal(1)
            });
            it("should filter all odd numbers", () => {
                sumator.add(2);
                sumator.add(3);
                sumator.add(4);
                sumator.add(6);
                sumator.add(8);
                sumator.removeByFilter(function (x) {
                    return x % 2 !== 0;
                });
                expect(sumator.data.length).to.equal(4)
            });
        });
        describe("toString functionality", () => {
            it("if no elements should return (empty)", () => {
                expect(sumator.toString()).to.equal("(empty)")
            });
            it("should return all elements", () => {
                sumator.add(2);
                sumator.add('pesho');
                sumator.add({as:"always"});
                sumator.add([1,2,3]);
                expect(sumator.toString()).to.equal("2, pesho, [object Object], 1,2,3")
            });
            it("should return all number elements after filter", () => {
                sumator.add(2);
                sumator.add('pesho');
                sumator.add({as:"always"});
                sumator.add([1,2,3]);
                sumator.removeByFilter(function (a) {
                    return isNaN(a)
                });
                expect(sumator.toString()).to.equal("2")
            });
            it("should return all non number elements after filter", () => {
                sumator.add(2);
                sumator.add('pesho');
                sumator.add({as:"always"});
                sumator.add([1,2,3]);
                sumator.removeByFilter(function (a) {
                    return !isNaN(a)
                });
                expect(sumator.toString()).to.equal("pesho, [object Object], 1,2,3")
            });
        });
    });
});