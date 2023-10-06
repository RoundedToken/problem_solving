// https://leetcode.com/problems/integer-break/?envType=daily-question&envId=2023-10-06

if (n <= 3) {
    return n - 1;
} else if (n % 3 === 0) {
    const numThrees = Math.floor(n / 3);
    return Math.pow(3, numThrees);
} else if (n % 3 === 1) {
    const numThrees = Math.floor(n / 3) - 1;
    return Math.pow(3, numThrees) * 4;
} else {
    const numThrees = Math.floor(n / 3);
    return Math.pow(3, numThrees) * 2;
}
