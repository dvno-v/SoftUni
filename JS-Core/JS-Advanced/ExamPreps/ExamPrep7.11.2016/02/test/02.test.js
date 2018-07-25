let expect = require('chai').expect;
let list = require("../02").list;

describe("unit test", ()=> {
    it("can add", () => {
        list.add(2);
        expect(list.toString()).to.equal("2");
    });
    it("toString functionality", () => {
        list.add(2);
        list.add(2);
        list.add(2);
        expect(list.toString()).to.equal("2, 2, 2, 2")
    });
    it("remove functionality", () => {
        list.add({3: [1, 2, 3]});
        list.delete(4);
        expect(list.toString()).to.equal("2, 2, 2, 2")
    });
    it("remove functionality return something", ()=>{
        list.add("tapanar");
        expect(list.delete(4)).to.equal("tapanar")
    });
    it("remove functionality return undefined if index out of range", ()=>{
        expect(list.delete(89)).to.be.undefined;
    });
    it("remove functionality return undefined if index not valid", ()=>{
        expect(list.delete({})).to.be.undefined;
    });
    it("remove functionality return undefined if index not valid", ()=>{
        expect(list.delete([])).to.be.undefined;
    });
    it("remove functionality return undefined if index not valid", ()=>{
        expect(list.delete('ah maikoo')).to.be.undefined;
    });

});