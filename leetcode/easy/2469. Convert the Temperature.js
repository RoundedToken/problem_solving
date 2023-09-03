// https://leetcode.com/problems/convert-the-temperature/

var convertTemperature = function (celsius) {
    return [(celsius + 273.15).toFixed(5), (celsius * 1.8 + 32.0).toFixed(5)];
};
