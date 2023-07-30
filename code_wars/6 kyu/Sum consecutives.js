// https://www.codewars.com/kata/55eeddff3f64c954c2000059/train/javascript

function sumConsecutives(s) {
    return s.reduce(
        (prev, curr, ind, arr) => {
            const next = arr[ind + 1];
            prev.acc += curr;
            if (next !== curr) {
                prev.arr.push(prev.acc);
                prev.acc = 0;
            }
            return prev;
        },
        { arr: [], acc: 0 }
    ).arr;
}

function main() {
    console.log(sumConsecutives([1, 4, 4, 4, 0, 4, 3, 3, 1]));
}
if (require.main === module) {
    main();
}
