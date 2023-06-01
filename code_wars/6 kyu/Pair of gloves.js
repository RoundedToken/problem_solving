// https://www.codewars.com/kata/58235a167a8cb37e1a0000db/train/javascript

function numberOfPairs(gloves) {
    const set = new Set();

    return gloves.reduce((prev, curr) => {
        if (!set.has(curr)) {
            set.add(curr);
            return prev;
        } else {
            set.delete(curr);
            return ++prev;
        }
    }, (prev = 0));
}

function main() {
    const gloves = ['red', 'red', 'red', 'red', 'red', 'red'];
    console.log(numberOfPairs(gloves));
}
if (require.main === module) {
    main();
}

// input = ["red", "green", "red", "blue", "blue"]
// result = 2 (1 red pair + 1 blue pair)

// input = ["red", "red", "red", "red", "red", "red"]
// result = 3 (3 red pairs)
