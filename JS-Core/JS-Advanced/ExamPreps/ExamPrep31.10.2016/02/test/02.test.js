let SortedList = require("../02.js").SortedList;
let expect = require("chai").expect;

describe("Unit testing", () => {
    it("is a class and the object is an instance of the class", () => {
        let list = new SortedList();
        expect(list instanceof SortedList).to.be.true;
    });
    describe("has properties", () => {
        it("has prop list", () => {
            let list = new SortedList();
            expect(Array.isArray(list.list)).to.be.true;
        });
        it("has prop list size", () => {
            let list = new SortedList();
            expect(list.size).to.equal(0);
        });
    });
    describe("has functions", () => {
        it("has func add", () => {
            expect(typeof (new SortedList().add)).to.equal("function");
        });
        it("has func remove", () => {
            expect(typeof (new SortedList().remove)).to.equal("function");
        });
        it("has func get", () => {
            expect(typeof (new SortedList().get)).to.equal("function");
        });
    });
    describe("simple functionality", () => {
        it("can add numbers", () => {
            let list = new SortedList();
            list.add(1587);
            expect(list.get(0)).to.equal(1587);
        });
        it("can add numbers and size is valid", () => {
            let list = new SortedList();
            list.add(1587);
            expect(list.size).to.equal(1);
        });
        it("can add numbers and can remove them", () => {
            let list = new SortedList();
            list.add(1587);
            list.remove(0);
            expect(list.size).to.equal(0);
        });
        it("throws an error if collection is empty", () => {
            expect(()=> new SortedList().remove(100)).to.throw(Error);
        });
        it("throws an error if index out of range", () => {
            expect(()=> new SortedList()
                .add(100)
                .remove(20)).to.throw(Error);
        });
        it("throws an error if collection is empty", () => {
            expect(()=> new SortedList().get(100)).to.throw(Error);
        });
        it("throws an error if index out of range", () => {
            expect(()=> new SortedList()
                .add(100)
                .get(20)).to.throw(Error);
        });
    });
    describe("hardCORE functionality", ()=>{
        it("adding a lot", () => {
            let list = new SortedList();
            list.add(2);
            list.add(2);
            list.add(2);
            list.add(2);
            expect(list.size).to.equal(4)
        });
        it("adding a lot and getting the 3 element", () => {
            let list = new SortedList();
            list.add(1);
            list.add(2);
            list.add(3);
            list.add(123);
            list.add(4);
            expect(list.get(4)).to.equal(123);
        });
        it("adding a lot and removing and getting the 3 element", () => {
            let list = new SortedList();
            list.add(2);
            list.add(2);
            list.add(2);
            list.add(2);
            list.add(5);
            list.remove(3);
            expect(list.get(3)).to.equal(5);
        });
        it("adding a lot and removing and getting the 3 element", () => {
            let list = new SortedList();
            list.add(2);
            list.remove(0);
            expect(list.size).to.equal(0);
        });
    });
});