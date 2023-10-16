// https://leetcode.com/problems/pascals-triangle-ii/description/?envType=daily-question&envId=2023-10-16

var getRow = function (rowIndex) {
    var row = [1];

    for (var i = 1; i <= rowIndex; i++) {
        for (var j = i; j > 0; j--) {
            if (j === i) row[j] = 1;
            else row[j] = row[j - 1] + row[j];
        }
    }
    return row;
};
