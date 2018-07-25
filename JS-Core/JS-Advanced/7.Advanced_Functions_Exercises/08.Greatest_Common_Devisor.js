function gdc(a, b) {
    if (!b) {
        return a;
    }
    return gcd(b, a % b);
};
