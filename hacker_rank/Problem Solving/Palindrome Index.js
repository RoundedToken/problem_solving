// https://www.hackerrank.com/challenges/palindrome-index/problem?isFullScreen=true
function palindromeIndex(s) {
    //console.log(s.charAt(44))
    let l = s.length;
    let index1;
    let index2;
    if (s == s.split("").reverse().join("")) return -1
    else {
        
        let head = l - 1
        for (let back = 0; back < Math.floor(l / 2);) {

            if (s.charAt(back) == s.charAt(head)) {
                back++;
                head--
            } else {
                index1 = back;
                index2 = head;
                break;
            }

        }

    }
    let newS1 = s.slice(0, index1).concat(s.slice(index1 + 1, l));
    let newS2 = s.slice(0, index2).concat(s.slice(index2 + 1, l));
    if (newS1 == newS1.split("").reverse().join("")) return index1;
    else if (newS2 == newS2.split("").reverse().join("")) return index2;
    else return -1
}
function main() {
    let s = 'hgygsvlfcwnswtuhmyaljkqlqjjqlqkjlaymhutwsnwcwflvsgygh'
    console.log(palindromeIndex(s));
}
if (require.main === module) {
    main();
}