//https://www.codewars.com/kata/51b6249c4612257ac0000005

function fromRoman(roman) {
    let value = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
    ]);
    let current = 1;
    let answer = 0;
    for (let i = roman.length - 1; i >= 0; i--) {
        let x = value.get(roman[i]);
        if (x > current) {
            current = x;
            answer += x;
        } else if (x == current) answer += x;
        else answer -= x;
    }
    return answer;
}
