const pushFrom = (arr, ind, buffer) => {
    for (let i = ind; i < arr.length; i++) {
        buffer.push(arr[i]);
    }
};

const merge = (arr1, arr2, buffer) => {
    let ind1 = 0;
    let ind2 = 0;

    if (arr1.length === 0) {
        pushFrom(arr2, 0, buffer);
        return;
    }

    if (arr2.length === 0) {
        pushFrom(arr1, 0, buffer);
        return;
    }

    while (true) {
        const left = arr1[ind1];
        const right = arr2[ind2];

        if (left < right) {
            buffer.push(left);
            ind1++;
        } else if (right < left) {
            buffer.push(right);
            ind2++;
        } else {
            buffer.push(left);
            ind1++;
        }

        if (ind1 > arr1.length - 1) {
            pushFrom(arr2, ind2, buffer);
            break;
        }
        if (ind2 > arr2.length - 1) {
            pushFrom(arr1, ind1, buffer);
            break;
        }
    }
};

const solution = (input) => {
    const [n1, arrStr1, n2, arrStr2] = input.trim().split('\n');
    const arr1 = n1 > 0 ? arrStr1.trim().split(' ').map(Number) : [];
    const arr2 = n2 > 0 ? arrStr2.trim().split(' ').map(Number) : [];

    const buffer = [];
    console.log(arr1, arr2);
    merge(arr1, arr2, buffer);

    return buffer.join(' ');
};

function main() {
    console.log(
        solution(`5
    1 3 5 5 9
    3
    2 5 6`)
    );
    console.log(
        solution(`1
    0
    0`)
    );
    console.log(
        solution(`0

1
0`)
    );
    console.log(
        solution(`1
        0
        1
        0`)
    );
}
if (require.main === module) {
    main();
}
