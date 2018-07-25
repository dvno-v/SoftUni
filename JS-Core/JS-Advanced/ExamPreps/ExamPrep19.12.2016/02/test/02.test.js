let makeList = require("../02.js").makeList;
let expect = require('chai').expect;

describe("Unit tests", ()=>{
    describe("default tests", ()=>{
       it("expect makeList to be a function", ()=>{
          expect(typeof makeList).to.equal("function");
       });
        it("expect makeList to return object", ()=>{
            expect(typeof makeList()).to.equal("object");
        });

    });
    describe("expect makeList() to have properties", ()=>{
        it("has property addLeft",()=>{
            expect(typeof makeList().addLeft).to.equal("function");
        });
        it("has property addRight",()=>{
            expect(typeof makeList().addRight).to.equal("function");
        });
        it("has property clear",()=>{
            expect(typeof makeList().clear).to.equal("function");
        });
        it("has property toString",()=>{
            expect(typeof makeList().toString).to.equal("function");
        });
    });
    describe("functionality tests",()=>{
       it("addLeft functionality", ()=>{
           let list = makeList();
           list.addLeft(2);
           list.addLeft(5);
           list.addLeft(9);
           expect(list.toString()).to.equal("9, 5, 2");
       });
        it("addRight functionality", ()=>{
            let list = makeList();
            list.addRight(2);
            list.addRight(5);
            list.addRight(9);
            expect(list.toString()).to.equal("2, 5, 9");
        });
        it("wipe functionality", ()=>{
            let list = makeList();
            list.addLeft(2);
            list.addLeft(5);
            list.addLeft(9);
            list.clear();
            expect(list.toString()).to.equal("");
        });
        it("mixed functionality", ()=>{
            let list = makeList();
            list.addLeft(2);
            list.addRight(5);
            list.addLeft(9);
            list.addRight(2);
            expect(list.toString()).to.equal("9, 2, 5, 2");
        });
        it("mixed functionality using not only numbers", ()=>{
            let list = makeList();
            list.addLeft(2);
            list.addRight("hosho");
            list.addLeft({2:"dve"});
            list.addRight([1,2,3,4,5,6]);
            expect(list.toString()).to.equal("[object Object], 2, hosho, 1,2,3,4,5,6");
        });
        it("mixed functionality and using to string command", ()=>{
            let list = makeList();
            list.addLeft(2);
            list.addRight(3);
            list.addLeft(4);
            list.addRight([1,2,3,4,5,6]);
            expect(list.toString()).to.equal("4, 2, 3, 1,2,3,4,5,6");
        });
    });
});