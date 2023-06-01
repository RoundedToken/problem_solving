// https://www.codewars.com/kata/596f72bbe7cd7296d1000029/train/javascript

function deepCount(a) {
    let count = 0;

    const recursion = (arr) => {
        for (let v of arr) {
            count++;
            if (Array.isArray(v)) recursion(v);
        }
    };

    recursion(a);

    return count;
}

function main() {
    const a = [1, 2, [3, 4, [5]]];
    console.log(deepCount(a));
}
if (require.main === module) {
    main();
}

// []                   -->  0
// [1, 2, 3]            -->  3
// ["x", "y", ["z"]]    -->  4
// [1, 2, [3, 4, [5]]]  -->  7
