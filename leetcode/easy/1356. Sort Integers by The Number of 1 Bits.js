// https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/?envType=daily-question&envId=2023-10-30

function sortByBits(numbers) {
    const map = {};

    for (let i = 0; i < numbers.length; i++) {
        let counter = 0;
        let bit = numbers[i];

        while (bit > 0) {
            counter += bit & 1;
            bit = bit >> 1;
        }

        map[numbers[i]] = counter;
    }

    return numbers.sort((a, b) => map[a] - map[b] || a - b);
}
