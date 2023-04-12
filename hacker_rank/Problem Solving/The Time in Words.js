// https://www.hackerrank.com/challenges/the-time-in-words/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
function timeInWords(h, m) {
    const time = new Map([
        [0, "o' clock"],
        [1, "one"],
        [2, "two"],
        [3, "three"],
        [4, "four"],
        [5, "five"],
        [6, "six"],
        [7, "seven"],
        [8, "eight"],
        [9, "nine"],
        [10, "ten"],
        [11, "eleven"],
        [12, "twelve"],
        [13, "thirteen"],
        [14, "fourteen"],
        [15, "quarter"],
        [16, "sixteen"],
        [17, "seventeen"],
        [18, "eighteen"],
        [19, "nineteen"],
        [20, "twenty"],
        [21, "twenty one"],
        [22, "twenty two"],
        [23, "twenty three"],
        [24, "twenty four"],
        [25, "twenty five"],
        [26, "twenty six"],
        [27, "twenty seven"],
        [28, "twenty eight"],
        [29, "twenty nine"],
        [30, "half"]
    ])
    if (h == 15) {
        if (m == 0) { return "fifteen" + " " + time.get(m) }
        else if (m == 1) { return time.get(m) + " minute past " + "fifteen" }
        else if (m == 15) { return time.get(m) + " past " + "fifteen" }
        else if (m < 30) { return time.get(m) + " minutes past " + "fifteen" }
        else if (m == 30) { return time.get(m) + " past " + "fifteen" }
        else if (m == 59) { return time.get(60 - m) + " minute to " + "sixteen" }
        else if (m == 45) { return time.get(60 - m) + " to " + "sixteen" }
        else { return time.get(60 - m) + " minutes to " + "sixteen" }
    }
    if (m == 0) { return time.get(h) + " " + time.get(m) }
    else if (m == 1) { return time.get(m) + " minute past " + time.get(h) }
    else if (m == 15) { return time.get(m) + " past " + time.get(h) }
    else if (m < 30) { return time.get(m) + " minutes past " + time.get(h) }
    else if (m == 30) { return time.get(m) + " past " + time.get(h) }
    else if (m == 59) { return time.get(60 - m) + " minute to " + time.get(h + 1) }
    else if (m == 45) { return time.get(60 - m) + " to " + time.get(h + 1) }
    else { return time.get(60 - m) + " minutes to " + time.get(h + 1) }
}
function main() {
    let h = 5;
    let m = 45;
    console.log(timeInWords(h, m));
}
if (require.main === module) {
    main();
}