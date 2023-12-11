// https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/description/?envType=daily-question&envId=2023-12-11

var findSpecialInteger = function (arr) {
    const quarter = Math.ceil(arr.length / 4);

    for (let i = quarter - 1; i < arr.length; i += quarter) {
        if (appearsMoreThanAQuarter(arr, arr[i])) return arr[i];
    }
};

const appearsMoreThanAQuarter = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    let mid = right;

    while (left < right) {
        mid = (left + right) >> 1;

        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return arr[right + (arr.length >> 2)] === target;
};
