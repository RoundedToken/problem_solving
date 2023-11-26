function solution1(x) {
    x = Number(x);
    let result = [];
    let A = 1n;
    let B = 1n;
    let currentA = 1n;
    let currentB = 1n;

    while (result.length < x) {
        if (currentA === currentB) {
            result.push(currentA);
            A += 1n;
            B += 1n;
            currentA = A ** 2n;
            currentB = B ** 3n;
        } else if (currentA < currentB) {
            result.push(currentA);
            A += 1n;
            currentA = A ** 2n;
        } else {
            result.push(currentB);
            B += 1n;
            currentB = B ** 3n;
        }
    }

    return result[x - 1].toString();
}

function solution(x) {
    x = Number(x);
    let result = [];
    let A = 1;
    let B = 1;
    let currentA = 1;
    let currentB = 1;

    while (result.length < x) {
        if (currentA === currentB) {
            result.push(currentA);
            A += 1;
            B += 1;
            currentA = A ** 2;
            currentB = B ** 3;
        } else if (currentA < currentB) {
            result.push(currentA);
            A += 1;
            currentA = A ** 2;
        } else {
            result.push(currentB);
            B += 1;
            currentB = B ** 3;
        }
    }

    return result[x - 1].toString();
}

function main() {
    console.log(solution1(10000000));
    console.log(solution(10000000));
}
if (require.main === module) {
    main();
}
