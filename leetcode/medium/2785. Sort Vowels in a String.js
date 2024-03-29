// https://leetcode.com/problems/sort-vowels-in-a-string/?envType=daily-question&envId=2023-11-13

var sortVowels = function (s) {
    arr = [];
    vowels = 'aeiouAEIOU';
    s = s.split('');

    for (let i = 0; i < s.length; i++) {
        if (vowels.indexOf(s[i]) >= 0) {
            arr.push(s[i]);
        }
    }

    arr.sort();

    for (let i = 0; i < s.length; i++) {
        if (vowels.indexOf(s[i]) >= 0) {
            s[i] = arr.shift();
        }
    }

    s = s.join('');

    return s;
};
