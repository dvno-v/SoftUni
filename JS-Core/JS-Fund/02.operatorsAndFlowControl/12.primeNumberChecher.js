function isPrime(num) {
    let primed = true;
    for (let i = 4; i < num; i++) {
        if (num % i == 0) {
            primed = false;
            break;
        }
    }
    return primed && (num > 1);
}