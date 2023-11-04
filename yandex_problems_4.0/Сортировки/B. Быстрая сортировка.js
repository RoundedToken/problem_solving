const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
};

const partition = (arr, left, right) => {
    // const pivot = arr[Math.floor((left + right) / 2)];
    console.log(Math.floor(Math.random() * arr.length));
    const pivot = arr[Math.floor(Math.random() * arr.length)];

    let i = left;
    let j = right;

    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }

    return i;
};

const quickSort = (arr, left, right) => {
    if (left < right) {
        const index = partition(arr, left, right);
        quickSort(arr, left, index - 1);
        quickSort(arr, index, right);
    }
};

const solution = (input) => {
    const [n, arrStr] = input.trim().split('\n');
    if (arrStr === '' || arrStr === undefined) return '';
    const arr = arrStr.trim().split(' ').map(Number);

    quickSort(arr, 0, arr.length - 1);

    return arr.join(' ');
};

function main() {
    console.log(
        solution(`5
    1 5 2 4 3`)
    );
    console.log(
        solution(`5
    1`)
    );
    console.log(
        solution(`5
    1 1 1 2 1 1 1`)
    );
}
if (require.main === module) {
    main();
}
