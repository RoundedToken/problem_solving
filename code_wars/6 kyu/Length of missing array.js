// https://www.codewars.com/kata/57b6f5aadb5b3d0ae3000611

function getLengthOfMissingArray(arrayOfArrays) {
    if (arrayOfArrays === null || arrayOfArrays.length === 0) return 0;

    for (let arr of arrayOfArrays) {
        if (arr === null || arr.length === 0) return 0;
    }

    const sortedArray = arrayOfArrays.sort((a, b) => a.length - b.length);

    for (let i = 1; i < sortedArray.length; i++) {
        if (sortedArray[i].length - sortedArray[i - 1].length !== 1)
            return sortedArray[i - 1].length + 1;
    }
}

function main() {
    const arrayOfArrays = [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]];
    console.log(getLengthOfMissingArray(arrayOfArrays));
}
if (require.main === module) {
    main();
}
