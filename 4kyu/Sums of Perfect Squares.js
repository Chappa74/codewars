function isPrefectSquare(n) {
    return Math.sqrt(n) % 1 === 0;
}
function sumOfSquares(n) {
    if (isPrefectSquare(n)) {
        return 1;
    }
    while (n % 4 === 0) {
        n /= 4;
    }
    if (n % 8 === 7) {
        return 4;
    }
    const sqrt = Math.floor(Math.sqrt(n));
    for (let i = 1; i <= sqrt; i++) {
        if (isPrefectSquare(n - i * i)) {
            return 2;
        }
    }
    return 3;
}