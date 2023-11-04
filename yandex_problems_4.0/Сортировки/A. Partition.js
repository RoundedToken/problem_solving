function partition3(arr, left, right, pivot) {
    let equal = left;
    let greater = right;
    let now = left;

    while (now <= greater) {
        if (arr[now] < pivot) {
            [arr[now], arr[equal]] = [arr[equal], arr[now]];
            equal++;
            now++;
        } else if (arr[now] > pivot) {
            [arr[now], arr[greater]] = [arr[greater], arr[now]];
            greater--;
        } else {
            now++;
        }
    }

    return equal;
}

const solution = (input) => {
    let [_, arrStr, pivot] = input.trim().split('\n');
    if (arrStr === '') return `${0}\n${0}`;
    const arr = arrStr
        .trim()
        .split(' ')
        .map((n) => +n);
    pivot = Number(pivot);

    const partitionIndex = partition3(arr, 0, arr.length - 1, pivot);

    let leftCount = 0;
    let rightCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (i < partitionIndex) {
            leftCount++;
        } else {
            rightCount++;
        }
    }

    return `${leftCount}\n${rightCount}`;
};

function main() {
    console.log(
        solution(`5
    1 9 4 2 3
    3`)
    );
    console.log(
        solution(`0

    0`)
    );
    console.log(
        solution(`1
        0
        0`)
    );
}
if (require.main === module) {
    main();
}
