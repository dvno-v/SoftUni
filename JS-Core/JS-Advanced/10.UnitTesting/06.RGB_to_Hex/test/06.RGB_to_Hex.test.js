let expect = require('chai').expect;
let rgbToHexColor = require('../06.RGB_to_Hex').rgbToHexColor;

describe("testing the rgb to hex colour function", () => {
    it("invalid argument", () => {
        expect(rgbToHexColor('gosho', 12, 23)).to.be.undefined;
    });
    it("invalid argument", () => {
        expect(rgbToHexColor(1, 'gosho', 23)).to.be.undefined;
    });
    it("invalid argument", () => {
        expect(rgbToHexColor(1, 12, 'gosho')).to.be.undefined;
    });
    it("invalid argument", () => {
        expect(rgbToHexColor(-1, 12, 12)).to.be.undefined;
    });
    it("invalid argument", () => {
        expect(rgbToHexColor(1, -12, 12)).to.be.undefined;
    });
    it("invalid argument", () => {
        expect(rgbToHexColor(1, 12, -12)).to.be.undefined;
    });
    it("invalid argument", () => {
        expect(rgbToHexColor(256, 12, 12)).to.be.undefined;
    });
    it("invalid argument", () => {
        expect(rgbToHexColor(1, 256, 12)).to.be.undefined;
    });
    it("invalid argument", () => {
        expect(rgbToHexColor(1, 12, 256)).to.be.undefined;
    });
    it("formating the output correctly", () => {
        expect(rgbToHexColor(1, 2, 3)).to.equal('#010203');
    });
    it("formating the output correctly", () => {
        expect(rgbToHexColor(15, 15, 15)).to.equal('#0F0F0F');
    });
    it("all 0", () => {
        expect(rgbToHexColor(0 , 0, 0)).to.equal('#000000');
    });
    it("all 255", () => {
        expect(rgbToHexColor(255 , 255, 255)).to.equal('#000000');
    });
    it("outputing correctly", () => {
        expect(rgbToHexColor(90, 180, 150)).to.equal('#5AB496');
    });
    it("should not work with fractions", () => {
        expect(rgbToHexColor(9.10, 180.2, 150.5)).to.equal(undefined);
    });
    it("should not work with fractions", () => {
        expect(rgbToHexColor(9, 180.2, 150.5)).to.equal(undefined);
    });
    it("should not work with fractions", () => {
        expect(rgbToHexColor(9, 180, 150.5)).to.equal(undefined);
    });
    it("should not work with fractions", () => {
        expect(rgbToHexColor(9.10, 180.2, 150.5)).to.equal(undefined);
    });
    it("empty arguments", () => {
        expect(rgbToHexColor()).to.equal(undefined);
    });
    it("objects as arguments", () => {
        expect(rgbToHexColor([],{},{})).to.equal(undefined);
    });
});