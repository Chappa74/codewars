function largestSum(arr) {
    let ans = arr[0] || 0;
    arr.reduce((sum, val) => {
        sum += val;
        ans = Math.max(ans, sum);
        return Math.max(sum, 0);
    }, 0);
    return Math.max(ans, 0);
}