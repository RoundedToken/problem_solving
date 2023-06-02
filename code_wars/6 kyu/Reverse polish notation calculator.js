// https://www.codewars.com/kata/52f78966747862fc9a0009ae/train/javascript

function calc(expr) {
    if (expr === '') return 0;

    console.log(expr.split(' '));

    const arr = expr.split(' ');

    while (arr.includes('+') || arr.includes('-') || arr.includes('*') || arr.includes('/')) {
        for (let ind in arr) {
            if (arr[ind] === '+' || arr[ind] === '-' || arr[ind] === '*' || arr[ind] === '/') {
                console.log('ind=', ind);
                console.log(arr[Number(ind) - 2] + arr[ind] + arr[Number(ind) - 1]);
                arr.splice(Number(ind) - 2, 3, eval(arr[ind - 2] + arr[ind] + arr[ind - 1]));
                console.log(arr);
                break;
            }
        }
        console.log(arr);
    }
    return Number(arr[0]);
}

function main() {
    console.log(calc('3'));
}
if (require.main === module) {
    main();
}
