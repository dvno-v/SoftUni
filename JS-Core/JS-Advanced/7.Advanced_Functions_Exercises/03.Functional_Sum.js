let add = (function () {
    let sum = 0;
    return function asd(number) {
        sum+= number;
        asd.toString = () => sum;
        return asd;
    }
});
