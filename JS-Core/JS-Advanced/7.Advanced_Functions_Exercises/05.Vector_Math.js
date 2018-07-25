let result = (function() {
    function vectorAdd(vec1, vec2) {
        return [vec1[0] + vec2[0], vec1[1] + vec2[1]];
    }

    function vectorMultiply(vec, scalar) {
        return [vec[0] * scalar, vec[1] * scalar];
    }

    function vectorLenght(vec) {
        return Math.sqrt(vec[1] ** 2 + vec[0] ** 2);
    }

    function vectorDot(vec1, vec2) {
        return vec1[0] * vec2[0] + vec1[1] * vec2[1];
    }

    function vectorCross(vec1, vec2) {
        return vec1[0] * vec2[1] - vec1[1] * vec2[0];
    }
    return {
        add: vectorAdd,
        multiply: vectorMultiply,
        length: vectorLenght,
        dot: vectorDot,
        cross: vectorCross
    }
})();

console.log(result);