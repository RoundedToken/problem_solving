// https://leetcode.com/problems/maximal-rectangle/description/?envType=daily-question&envId=2024-04-13

var maximalRectangle = function (matrix) {
    const largestRectInHistogram = function (arr) {
        const n = arr.length;
        const st = [];
        const leftSmall = [];
        const rightSmall = [];

        for (let i = 0; i < n; i++) {
            while (st.length && arr[st[st.length - 1]] >= arr[i]) st.pop();
            if (st.length) leftSmall[i] = st[st.length - 1] + 1;
            else leftSmall[i] = 0;
            st.push(i);
        }

        while (st.length) st.pop();

        for (let i = n - 1; i >= 0; i--) {
            while (st.length && arr[st[st.length - 1]] >= arr[i]) st.pop();
            if (st.length) rightSmall[i] = st[st.length - 1] - 1;
            else rightSmall[i] = n - 1;
            st.push(i);
        }

        let maxVal = 0;
        for (let i = 0; i < n; i++) {
            maxVal = Math.max(maxVal, arr[i] * (rightSmall[i] - leftSmall[i] + 1));
        }

        return maxVal;
    };

    let prevArray = new Array(matrix[0].length).fill(0);
    let maximumRect = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === '0') {
                prevArray[j] = 0;
            } else {
                prevArray[j] += 1;
            }
        }
        maximumRect = Math.max(maximumRect, largestRectInHistogram(prevArray));
    }
    return maximumRect;
};
