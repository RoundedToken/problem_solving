// https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9/train/javascript

function upArray(arr) {
    if (arr.some((v) => v < 0 || v > 9)) return null;
    if (arr.length === 0) return null;

    const zeros = [];
    if (arr[0] === 0) {
        let ind = 0;
        while (arr[ind] === 0) {
            zeros.push(0);
            ind++;
        }
    }

    return zeros.concat(
        (BigInt(arr.join('')) + 1n)
            .toString()
            .split('')
            .map((v) => Number(v))
    );
}

function main() {
    console.log(upArray([0, 0, 3]));
}
if (require.main === module) {
    main();
}

// Valid arrays

// [4, 3, 2, 5] would return [4, 3, 2, 6]
// [1, 2, 3, 9] would return [1, 2, 4, 0]
// [9, 9, 9, 9] would return [1, 0, 0, 0, 0]
// [0, 1, 3, 7] would return [0, 1, 3, 8]

// Invalid arrays

// [1, -9] is invalid because -9 is not a non-negative integer

// [1, 2, 33] is invalid because 33 is not a single-digit integer
