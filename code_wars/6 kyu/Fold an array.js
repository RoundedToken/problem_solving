// https://www.codewars.com/kata/57ea70aa5500adfe8a000110/train/javascript

function foldArray(array, runs) {
    let result = [...array];

    for (let i = 0; i < runs; i++) {
        const newArr = [];
        if (result.length % 2) {
            for (let g = 0; g < Math.floor(result.length / 2); g++)
                newArr.push(result[g] + result[result.length - 1 - g]);

            newArr.push(result[Math.floor(result.length / 2)]);
        } else
            for (let g = 0; g < Math.floor(result.length / 2); g++)
                newArr.push(result[g] + result[result.length - 1 - g]);
        console.log(newArr);
        result = [...newArr];
    }

    return result;
}

function main() {
    console.log(foldArray([1, 2, 3, 4, 5], 3));
}
if (require.main === module) {
    main();
}
