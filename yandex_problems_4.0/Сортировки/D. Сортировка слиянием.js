// const pushFrom = (arr, ind, buffer) => {
//     for (let i = ind; i < arr.length; i++) {
//         buffer.push(arr[i]);
//     }
// };

// const merge = (arr1, arr2, buffer) => {
//     let ind1 = 0;
//     let ind2 = 0;

//     if (arr1.length === 0) {
//         pushFrom(arr2, 0, buffer);
//         return;
//     }

//     if (arr2.length === 0) {
//         pushFrom(arr1, 0, buffer);
//         return;
//     }

//     while (true) {
//         const left = arr1[ind1];
//         const right = arr2[ind2];

//         if (left < right) {
//             buffer.push(left);
//             ind1++;
//         } else if (right < left) {
//             buffer.push(right);
//             ind2++;
//         } else {
//             buffer.push(left);
//             ind1++;
//         }

//         if (ind1 > arr1.length - 1) {
//             pushFrom(arr2, ind2, buffer);
//             break;
//         }
//         if (ind2 > arr2.length - 1) {
//             pushFrom(arr1, ind1, buffer);
//             break;
//         }
//     }
// };

const merge = (left, right, leftLimit, rightLimit, sorted, buffer) => {
    let i = left;

    while (left < leftLimit && right < rightLimit) {
        if (sorted[left] <= sorted[right]) {
            buffer[i++] = sorted[left++];
        } else {
            buffer[i++] = sorted[right++];
        }
    }

    while (left < leftLimit) {
        buffer[i++] = sorted[left++];
    }

    while (right < rightLimit) {
        buffer[i++] = sorted[right++];
    }
};

const mergeSort = (arr) => {
    let sorted = Array.from(arr);
    let n = sorted.length;
    let buffer = new Array(n);

    for (let size = 1; size < n; size *= 2) {
        for (let leftStart = 0; leftStart < n; leftStart += 2 * size) {
            let left = leftStart,
                right = Math.min(left + size, n),
                leftLimit = right,
                rightLimit = Math.min(right + size, n);

            merge(left, right, leftLimit, rightLimit, sorted, buffer);
        }

        let temp = sorted;
        sorted = buffer;
        buffer = temp;
    }

    return sorted;
};

const solution = (input) => {
    const [n, arrStr] = input.trim().split('\n');
    if (arrStr === '' || arrStr === undefined) return '';
    const arr = arrStr.trim().split(' ').map(Number);

    return mergeSort(arr).join(' ');
};

function main() {
    console.log(
        solution(`5
    1 5 2 4 3 1`)
    );
}
if (require.main === module) {
    main();
}
