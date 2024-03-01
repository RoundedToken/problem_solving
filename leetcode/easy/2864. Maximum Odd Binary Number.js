// https://leetcode.com/problems/maximum-odd-binary-number/description/?envType=daily-question&envId=2024-03-01

s = s.split('').sort();
let i = s.length - 2;
let j = 0;
while (s[i] == 1 && i >= Math.floor(s.length / 2)) {
    [s[i], s[j]] = [s[j], s[i]];
    i--;
    j++;
}
return s.join('');
