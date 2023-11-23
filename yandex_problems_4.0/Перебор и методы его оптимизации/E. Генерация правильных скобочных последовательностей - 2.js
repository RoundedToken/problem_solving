// const isValid = (arr) => {
//     const dic = { '(': ')', '[': ']' };
//     const isOpen = new Set(Object.keys(dic));
//     const stack = [];

//     for (const el of arr) {
//         if (isOpen.has(el)) {
//             stack.push(el);
//         } else if (dic[stack.pop()] !== el) {
//             return false;
//         }
//     }

//     return stack.length === 0 ? true : false;
// };

// const solution2 = (input) => {
//     const n = Number(input);
//     const map = new Map([
//         [1, '('],
//         [2, '['],
//         [3, ')'],
//         [4, ']'],
//     ]);
//     const result = [];

//     function d(arr = [], open = 0, close = 0) {
//         if (arr.length === n) {
//             if (arr.at(-1) === ')' || arr.at(-1) === ']') {
//                 if (isValid(arr)) {
//                     result.push(arr.join(''));
//                 }
//             }
//             return;
//         }

//         for (let i = 1; i <= 4; i++) {
//             arr.push(map.get(i));
//             d(arr, open, close);
//             arr.pop();
//         }
//     }

//     d(['(']);
//     d(['[']);
//     console.log(result.length);
//     // return result.join('\n');
// };

const solution3 = (input) => {
    const n = Number(input);
    if (n === 0 || n % 2) return '';

    const map = new Map([
        [1, '('],
        [2, '['],
        [3, ')'],
        [4, ']'],
    ]);
    const result = [];

    function d(arr = [], stack = []) {
        if (arr.length === n) {
            result.push(arr.join(''));
            return;
        }

        for (let i = 1; i <= 4; i++) {
            if (stack.length === 0) {
                if (i === 3 || i === 4) continue;
            }
            if (stack.length === n - arr.length) {
                if (i === 1 || i === 2) continue;
            }

            if (stack.length === n - arr.length) {
                if (i === 3 && stack.at(-1) === 1) {
                    stack.pop();
                    arr.push(map.get(i));
                    d(arr, stack);
                    arr.pop();
                    stack.push(1);
                } else if (i === 4 && stack.at(-1) === 2) {
                    stack.pop();
                    arr.push(map.get(i));
                    d(arr, stack);
                    arr.pop();
                    stack.push(2);
                }
            } else if (i === 3 && stack.at(-1) === 1) {
                stack.pop();
                arr.push(map.get(i));
                d(arr, stack);
                arr.pop();
                stack.push(1);
            } else if (i === 4 && stack.at(-1) === 2) {
                stack.pop();
                arr.push(map.get(i));
                d(arr, stack);
                arr.pop();
                stack.push(2);
            } else if (i === 1 || i === 2) {
                stack.push(i);
                arr.push(map.get(i));
                d(arr, stack);
                arr.pop();
                stack.pop();
            }
        }
    }

    d();

    return result.join('\n');
};

function main() {
    console.log(solution3('4'));
}
if (require.main === module) {
    main();
}
