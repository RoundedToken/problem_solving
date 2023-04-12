// https://www.codewars.com/kata/53f40dff5f9d31b813000774/train/javascript

var recoverSecret = function (triplets) {
    function change(a, b) {
        let x = arr[a];
        arr[a] = arr[b];
        arr[b] = x;
    }

    function arrange() {
        for (let i of triplets) {
            for (let g = 1; g < 3; g++) {
                let indexCurr = arr.indexOf(i[g]);
                let indexPrev = arr.indexOf(i[g - 1]);
                if (indexCurr < indexPrev) change(indexCurr, indexPrev);
            }
        }
    }

    let arr = Array.from(new Set(triplets.map((v) => v.join('')).join('')));

    for (let i = 0; i <= Math.cbrt(arr.length); i++) arrange();

    return arr.join('');
};

function main() {
    let triplets = [
        ['t', 'u', 'p'],
        ['w', 'h', 'i'],
        ['t', 's', 'u'],
        ['a', 't', 's'],
        ['h', 'a', 'p'],
        ['t', 'i', 's'],
        ['w', 'h', 's'],
    ];
    //   "whatisup"
    console.log(recoverSecret(triplets));
}
if (require.main === module) {
    main();
}
